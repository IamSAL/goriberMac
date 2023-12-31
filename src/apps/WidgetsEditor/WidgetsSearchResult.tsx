import React from "react"
import WidgetsPreview from "./WidgetsPreview"
import WidgetWeather from "src/core/components/widgets-bar/WidgetWeather"
import { apps } from "src/misc/placeholder-data/apps"
import { useWidgetEditorContext } from "./contex"
import { IWidget } from "@types"
import { For } from "million/react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { cn } from "@utils"
import WidgetsSlotBar from "./WidgetsSlotBar"

const WidgetsSearchResult = () => {
  const { matchedWidgets, selectedAppId, isAnimating } = useWidgetEditorContext()
  const [animeParent, enableAnimations] = useAutoAnimate()
  const matchesAppId = (currentId) => {
    if (selectedAppId) {
      return currentId === selectedAppId
    }
    return true
  }

  return (
    <div
      className={cn(" h-[100vh] no-scrollbar   flex justify-between ", {
        "overflow-scroll overflow-y-auto": true,
      })}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8  left-0" ref={animeParent}>
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
      <div className="absolute right-0">
        <WidgetsSlotBar />
      </div>
    </div>
  )
}

export default WidgetsSearchResult
