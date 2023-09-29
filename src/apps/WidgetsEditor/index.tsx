import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
// import IconSearch from '/src/assets/icons/System/Search.svg';
import WidgetsSearchForm from "./WidgetsSearchForm"
import WidgetsSearchResult from "./WidgetsSearchResult"
import WidgetsSlotBar from "./WidgetsSlotBar"
import { WidgetEditorContext } from "./contex"
import { apps } from "src/misc/placeholder-data/apps"
import { DndProvider } from "react-dnd"
import { HTML5toTouch } from "rdndmb-html5-to-touch"
import { MultiBackend } from "react-dnd-multi-backend"
const WidgetsEditor = () => {
  const [searchTerm, setsearchTerm] = useState("")
  const [selectedAppId, setselectedAppId] = useState<number | undefined>()
  const programRef = useRef(null)
  const matchedWidgets = apps
    .flatMap((app) => app.widgets || [])
    .filter(
      (widget) =>
        widget.name.toLowerCase().includes(searchTerm) ||
        widget.description.toLowerCase().includes(searchTerm)
    )
  const matchedApps = apps.filter((app) =>
    matchedWidgets?.some((widget) => widget.appId === app.id)
  )

  useEffect(() => {
    //programRef.current?.focus()
  }, [programRef])

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <WidgetEditorContext.Provider
        value={{
          searchTerm,
          setsearchTerm,
          setselectedAppId,
          selectedAppId,
          matchedApps,
          matchedWidgets,
        }}
      >
        <div
          className="w-full h-full relative overflow-hidden"
          tabIndex={0}
          ref={programRef}
          role="dialog"
        >
          <Image
            src="/static/images/wallpapers/dark.svg"
            className="w-full h-full blur-lg absolute top-0 bottom-0 scale-125 z-10"
            alt="launchpad-bg"
            width={100}
            height={100}
          />
          <div className="w-full h-full blur-lg absolute top-0 bottom-0 bg-black bg-opacity-50 scale-125 z-10"></div>

          <div id="content" className="absolute top-0 left-0 w-full h-full z-20 fade-in-100">
            <div className="flex justify-between">
              <div className="flex-[20%] justify-start">
                {" "}
                <WidgetsSearchForm />
              </div>
              <div className="flex-[60%] justify-center items-center">
                <WidgetsSearchResult />
              </div>
              <div className="flex-[20%] justify-end">
                {" "}
                <WidgetsSlotBar />
              </div>
            </div>
          </div>
        </div>
      </WidgetEditorContext.Provider>
    </DndProvider>
  )
}

export default WidgetsEditor
