import React from "react"
import WidgetsPreview from "./WidgetsPreview"
import WidgetWeather from "src/core/components/widgets-bar/WidgetWeather"
import { apps } from "src/misc/placeholder-data/apps"
import { useWidgetEditorContext } from "./contex"
import { IWidget } from "@types"
import { For } from "million/react"

const WidgetsSearchResult = () => {
  const { matchedWidgets, selectedAppId } = useWidgetEditorContext()

  const matchesAppId = (currentId) => {
    if (selectedAppId) {
      return currentId === selectedAppId
    }
    return true
  }

  return (
    <div className="overflow-scroll h-[100vh] no-scrollbar  overflow-y-auto overflow-x-hidden flex justify-center ">
      <div className="grid grid-cols-2 gap-8 p-8">
        {/* <For each={matchedWidgets}>
          {(widget, idx) => {
            return <WidgetsPreview widget={widget as IWidget} key={widget?.name} />
          }}
        </For> */}
        {matchedWidgets
          .filter((widget) => matchesAppId(widget.appId))
          .map((widget, idx) => {
            return <WidgetsPreview widget={widget as IWidget} key={widget?.name} />
          })}
      </div>
    </div>
  )
}

export default WidgetsSearchResult
