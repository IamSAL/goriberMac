import { DROPPABLES, IWidget } from "@types"
import { cn } from "@utils"
import { Minus } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { useDrag, DragSourceMonitor } from "react-dnd"
import { useDispatch } from "react-redux"
import { useEffectOnce, useEvent, useHover, useMouseHovered } from "react-use"
import { ISystemWidget, removeWidget } from "src/core/redux/system/system.slice"
import { apps } from "src/misc/placeholder-data/apps"

const WidgetBody = ({ component, ...props }: any) => {
  console.log({ props })
  return component(props)
}

type TProps = {
  SystemWidget: ISystemWidget
  controls?: boolean
  className?: string
}

const WidgetSlot = ({ SystemWidget, controls = true, className }: TProps) => {
  const dispatch = useDispatch()
  const app = apps.find((app) => app.id === SystemWidget.widget.appId)
  const containerRef = useRef<any>()
  const labelRef = useRef<any>()

  const onMouseEnter = () => {
    if (labelRef.current) labelRef.current.innerText = "Edit widget"
  }
  const onMouseLeave = () => {
    if (labelRef.current) labelRef.current.innerText = SystemWidget.widget.name
  }

  useEffectOnce(() => {
    containerRef.current?.addEventListener("mouseenter", onMouseEnter)
    containerRef.current?.addEventListener("mouseleave", onMouseLeave)
    return () => {
      containerRef.current?.removeEventListener("mouseenter", onMouseEnter)
      containerRef.current?.removeEventListener("mouseleave", onMouseLeave)
    }
  })

  // const [{ isDragging }, drag] = useDrag(
  //   () => ({
  //     type: DROPPABLES.SYSTEM_WIDGET,
  //     item: { widget: SystemWidget.widget, size: SystemWidget.size },
  //     end(item, monitor) {
  //       const dropResult = monitor.getDropResult()
  //       // console.log({ item, dropResult })
  //     },
  //     collect: (monitor: DragSourceMonitor) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   }),
  //   []
  // )

  return (
    <div className={cn("relative group ", className)}>
      <div
        className="peer hover:scale-100 transition-all duration-100 ease-in-out scale-95 my-2"
        ref={containerRef}
      >
        <button
          onClick={() => dispatch(removeWidget(SystemWidget))}
          className={cn(
            "absolute z-50 left-[-5px] top-[-5px] h-5 w-5 rounded-full border border-white border-opacity-75 bg-white bg-opacity-75 text-black flex items-center text-sm justify-center  "
          )}
          style={{
            display: controls ? "flex" : "none",
          }}
        >
          <Minus size={12} />
        </button>
        {
          <WidgetBody
            component={SystemWidget.widget.component}
            size={SystemWidget.size}
            isEditing
          />
        }
      </div>
      <div
        className={cn(
          "w-100 flex text-sm flex-col justify-center mt-2 items-center fade-in-50",
          {
            hidden: !controls,
          },
          {
            "WidgetsSmall w-40": SystemWidget.size === "S",
            "WidgetsMedium w-80  ": SystemWidget.size === "M",
            "WidgetsLarge w-80 ": SystemWidget.size === "L",
          }
        )}
      >
        {app?.name}
        <div className="text-xs text-gray-400 mb-1" ref={labelRef}>
          {SystemWidget.widget.name}
        </div>
      </div>
    </div>
  )
}

export default WidgetSlot
