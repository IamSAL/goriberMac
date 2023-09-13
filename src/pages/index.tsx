import { BlitzPage } from "@blitzjs/next"

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppWindow, Dock, StatusBar } from "@components"
import { AppState } from "src/core/redux/redux"

import { cn } from "src/helpers/utils"
import { Resizable } from "src/misc/trials/Resizable"
import { IAppTemplate } from "@types"
import AppImmersive from "src/core/components/app-window/AppImmersive"

const HomePage: BlitzPage = () => {
  const dispatch = useDispatch()

  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)

  return (
    <div
      className={cn(
        `bg-[url('/static/images/wallpapers/dark.svg')] w-screen h-screen bg-no-repeat bg-cover relative`
      )}
    >
      <StatusBar />
      <div className="AppsContainer">
        {runningApps.map((app, idx) => {
          return app.config.template === IAppTemplate.IMMERSIVE ? (
            <AppImmersive key={app.id} app={app} />
          ) : (
            <AppWindow key={app.id} app={app} />
          )
        })}
      </div>

      <Dock />
      {/* <LaunchPad /> */}
    </div>
  )
}

export default HomePage
