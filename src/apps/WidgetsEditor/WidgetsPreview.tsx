import { useAutoAnimate } from "@formkit/auto-animate/react"
import { DROPPABLES, ISizes, IWidget } from "@types"
import { cn } from "@utils"
import Chance from "chance"
import React, { useContext, useState } from "react"
import { useDrag, DragSourceMonitor } from "react-dnd"
import { useDispatch } from "react-redux"
import { addWidget } from "src/core/redux/system/system.slice"
import { Preview, Context, usePreview } from "react-dnd-preview"
import style from "styled-jsx/style"
type TProps = {
  widget: IWidget
}

interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}

export interface BoxProps {
  name: string
}

const WidgetBody = ({ component, ...props }: any) => {
  return component(props)
}

const DraggedPreview = () => {
  const preview = usePreview()
  if (!preview.display) {
    return null
  }
  console.log({ preview })
  return (
    <div className="item-list__item" style={preview.style}>
      {<WidgetBody component={preview.item.widget.component} size={preview.item.size} />}
    </div>
  )
}

const WidgetsPreview = ({ widget }: TProps) => {
  const chance = new Chance()
  const dispatch = useDispatch()
  const { name, description, multiSized, component } = widget
  const [selectedSize, setselectedSize] = useState<ISizes>(chance.pickone(["S", "M", "L"]))

  const [{ opacity }, drag] = useDrag(
    () => ({
      type: DROPPABLES.WIDGET,
      item: { widget, size: selectedSize },
      end(item, monitor) {
        const dropResult = monitor.getDropResult() as DropResult
        // console.log({ item, dropResult })
      },
      collect: (monitor: DragSourceMonitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [selectedSize]
  )

  return (
    <div className="Item1 w-72 h-[450px] p-5 bg-white bg-opacity-10 rounded-2xl flex-col justify-start items-center  inline-flex">
      <DraggedPreview />

      <div className="TextContent w-64 h-10 flex-col justify-start items-start gap-1 inline-flex">
        <div className="Title w-64 text-white text-base font-bold font-['SF Pro Display'] leading-tight">
          {name}
        </div>
        <div className="Description w-64 text-white text-opacity-60 text-xs font-normal font-['SF Pro Text'] ">
          {description}
        </div>
      </div>
      <div
        className={cn(
          "w-80 h-96 flex justify-center items-center scale-75 overflow-hidden transition-opacity duration-300"
        )}
        style={{ opacity }}
        ref={drag}
      >
        {<WidgetBody component={component} size={selectedSize} />}
      </div>

      <div className="controls">
        {multiSized ? (
          <div className="flex space-x-2">
            {["S", "M", "L"].map((s) => (
              <button
                onClick={() => setselectedSize(s as ISizes)}
                key={s}
                className={cn(
                  "h-8 w-8 rounded-full border border-white border-opacity-75 bg-transparent text-white flex items-center text-sm justify-center",
                  {
                    "bg-gray-300 text-black": s === selectedSize,
                  }
                )}
              >
                {s}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default WidgetsPreview
