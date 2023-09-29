import { Drawer, DrawerContent } from "@components/ui/Drawer"
import { CONSTANTS } from "@constants"
import NiceModal, { useModal } from "@ebay/nice-modal-react"
import { DialogOverlay } from "@radix-ui/react-dialog"
// import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import React from "react"
import WidgetWeather from "./WidgetWeather"
import { useDispatch, useSelector } from "react-redux"
import AppLauncher from "../common/AppLauncher"
import { apps } from "src/misc/placeholder-data/apps"
import { setMaximized } from "src/core/redux/system/system.slice"
import { AppState } from "src/core/redux/redux"

const WidgetsBar = () => {
  const systemWidgets = useSelector((appState: AppState) => appState.system.widgets)
  return (
    <div className="widgets-bar  px-0 py-4 flex flex-shrink-0 flex-col gap-4 overflow-y-auto overflow-x-hidden h-[98vh] no-scrollbar  ">
      {systemWidgets.map((SystemWidget, idx) => {
        return (
          <SystemWidget.widget.component
            key={SystemWidget.widget.name + SystemWidget.widget.appId?.toString() + idx.toString()}
            size={SystemWidget.size}
          />
        )
      })}

      <div className="action flex justify-center relative align-middle pb-24">
        <AppLauncher appId={12}>
          <button className="outline-none bg-black bg-opacity-50 rounded-full border transition-all duration-100 border-gray-500 py-1 text-xs px-4 text-white text-opacity-80 active:text-opacity-90 active:bg-opacity-30">
            Edit Widgets
          </button>
        </AppLauncher>
      </div>
    </div>
  )
}

export const WidgetsBarDrawer = NiceModal.create(({ content }: { content: string }) => {
  const modal = useModal(CONSTANTS.MODALS.WIDGETS_BAR)
  return (
    <Drawer
      open={modal.visible}
      onOpenChange={async (open) => {
        if (!open) {
          await modal.hide()
        }
      }}
    >
      <DrawerContent className="bg-transparent border-0 shadow-none px-3 " role="dialog">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent from-[#21242adc] blur-lg" />
          <div className="px-0">
            <WidgetsBar />
          </div>
          <div className="absolute inset-x-0 bottom-[-10px] h-32 bg-gradient-to-t from-[#21242adc] to-transparent blur-lg" />
        </div>
      </DrawerContent>
    </Drawer>
  )
})

export default WidgetsBar
