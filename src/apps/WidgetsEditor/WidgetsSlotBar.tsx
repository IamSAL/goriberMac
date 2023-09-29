import React from "react"
import WidgetWeather from "src/core/components/widgets-bar/WidgetWeather"
import WidgetSlot from "./WidgetSlot"
import { useAppContext } from "src/core/components/app-window/appContext"
import { useModal } from "@ebay/nice-modal-react"
import { CONSTANTS } from "@constants"
import { useSelector } from "react-redux"
import { AppState } from "src/core/redux/redux"

const WidgetsSlotBar = () => {
  const { onTerminate } = useAppContext()
  // const widgetsBarModal = useModal(CONSTANTS.MODALS.WIDGETS_BAR)
  const onWidgetSlotExit = () => {
    onTerminate()
    // await widgetsBarModal.show()
  }
  const systemWidgets = useSelector((appState: AppState) => appState.system.widgets)
  return (
    <div className="slot overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden ">
      <div className="widgets-bar  p-8 py-4 flex flex-shrink-0 flex-col gap-4   ">
        {systemWidgets.map((SystemWidget, idx) => {
          return (
            <WidgetSlot
              key={
                SystemWidget.widget.name + SystemWidget.widget.appId?.toString() + idx.toString()
              }
              SystemWidget={SystemWidget}
            />
          )
        })}

        <div className="action flex justify-center relative align-middle pb-24">
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
