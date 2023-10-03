import React, { useState } from "react"
import WidgetWeather from "src/core/components/widgets-bar/WidgetWeather"
import WidgetSlot from "./WidgetSlot"
import { useAppContext } from "src/core/components/app-window/appContext"
import { useModal } from "@ebay/nice-modal-react"
import { CONSTANTS } from "@constants"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "src/core/redux/redux"
import { useDrop } from "react-dnd"
import { DROPPABLES } from "@types"
import { cn } from "@utils"
import { ISystemWidget, addWidget } from "src/core/redux/system/system.slice"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const WidgetsSlotBar = () => {
  const { onTerminate } = useAppContext()
  const [previewWidget, setPreviewWidget] = useState<ISystemWidget | null>(null)
  // const widgetsBarModal = useModal(CONSTANTS.MODALS.WIDGETS_BAR)
  const onWidgetSlotExit = () => {
    onTerminate()
    // await widgetsBarModal.show()
  }
  const systemWidgets = useSelector((appState: AppState) => appState.system.widgets)
  const dispatch = useDispatch()
  const [collectedProps, drop] = useDrop(
    () => ({
      accept: DROPPABLES.WIDGET,
      drop: (item, monitor) => {
        dispatch(addWidget(item as ISystemWidget))
        setPreviewWidget(null)
      },
      hover: (item: ISystemWidget, monitor) => {
        const isOver = monitor.isOver({ shallow: true })
        if (isOver && previewWidget?.widget.name !== item?.widget.name) {
          setPreviewWidget(item)
        } else {
          setPreviewWidget(null)
        }
      },
      collect: (monitor: any) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    []
  )

  const isActive = collectedProps.canDrop && collectedProps.isOver
  const [animeParent, enableAnimations] = useAutoAnimate()
  return (
    <div
      className="slot overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden flex justify-end"
      ref={drop}
    >
      <div className="max-w-[384px]">
        {" "}
        <div
          className={cn(
            "widgets-bar bg-gradient-to-l to-[#46464600] from-[#cccccc00]  p-8 py-4 min-w-[384px]  flex flex-wrap "
            // {
            //   " bg-gradient-to-l to-transparent from-[#cccccc2a] transition-all duration-500":
            //     collectedProps.canDrop,
            // }
          )}
          ref={animeParent}
        >
          {systemWidgets.map((SystemWidget, idx) => {
            return <WidgetSlot key={SystemWidget.id} SystemWidget={SystemWidget} />
          })}
          {previewWidget && isActive && (
            <WidgetSlot controls={false} SystemWidget={previewWidget} className="opacity-25 " />
          )}
        </div>
        <div className="action flex justify-center relative align-middle   z-[9999]">
          <button
            onClick={onWidgetSlotExit}
            className="outline-none bg-black bg-opacity-50  mt-10 mb-16 rounded-full border transition-all duration-100 border-gray-500 py-1 text-xs px-4 text-white text-opacity-80 active:text-opacity-90 active:bg-opacity-30"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default WidgetsSlotBar
