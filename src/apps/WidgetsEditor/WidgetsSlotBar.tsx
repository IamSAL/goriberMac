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
      className="slot overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden "
      ref={drop}
    >
      <div
        className={cn(
          "widgets-bar  p-8 py-4 flex flex-shrink-0 flex-col gap-4 min-w-[384px] h-full",
          {
            " bg-gradient-to-b to-[#46464609] from-[#cccccc4f] transition-all duration-300":
              collectedProps.canDrop,
          }
        )}
        ref={animeParent}
      >
        {systemWidgets.map((SystemWidget, idx) => {
          return <WidgetSlot key={SystemWidget.id} SystemWidget={SystemWidget} />
        })}
        {previewWidget && isActive ? (
          <WidgetSlot controls={false} SystemWidget={previewWidget} />
        ) : (
          <div
            className={cn(
              "relative flex-shrink-0 flex justify-center items-center bg-gradient-to-b to-[#3d3d3d71] from-[#0a0b0c] rounded-2xl shadow p-4 w-80 h-40 opacity-50"
            )}
          >
            Drag widgets here
          </div>
        )}
        <div className="action flex justify-center relative align-middle pb-24 z-[9999]">
          <button
            onClick={onWidgetSlotExit}
            className="outline-none bg-black bg-opacity-50 rounded-full border transition-all duration-100 border-gray-500 py-1 text-xs px-4 text-white text-opacity-80 active:text-opacity-90 active:bg-opacity-30"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default WidgetsSlotBar
