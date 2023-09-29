import { IWidget } from "@types"
import { cn } from "@utils"
import { Minus } from "lucide-react"
import React from "react"
import { useDispatch } from "react-redux"
import { ISystemWidget, removeWidget } from "src/core/redux/system/system.slice"

const WidgetBody = ({ component, ...props }: any) => {
  console.log({ props })
  return component(props)
}

type TProps = {
  SystemWidget: ISystemWidget
}

const WidgetSlot = ({ SystemWidget }: TProps) => {
  const dispatch = useDispatch()

  return (
    <div className="relative">
      <button
        onClick={() => dispatch(removeWidget(SystemWidget.widget))}
        className={cn(
          "absolute z-50 left-[-5px] top-[-5px] h-4 w-4 rounded-full border border-white border-opacity-75 bg-white bg-opacity-75 text-black flex items-center text-sm justify-center"
        )}
      >
        <Minus size={12} />
      </button>
      {<WidgetBody component={SystemWidget.widget.component} size={SystemWidget.size} />}
    </div>
  )
}

export default WidgetSlot
