import { IAppTemplate } from "@types"
import React, { Children } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startApp, terminateApp, updateAppStatus } from "src/core/redux/memory/memory.slice"
import { AppState } from "src/core/redux/redux"
import { apps } from "src/misc/placeholder-data/apps"

export interface IAppLauncherProps {
  children: React.ReactNode
  appId: number
}

const AppLauncher = ({ children, appId }: IAppLauncherProps) => {
  const dispatch = useDispatch()
  const app = apps.find((app) => app.id == appId)
  const runningApps = useSelector((appState: AppState) => appState.memory.appsInstances)
  const runningInstance = runningApps.find((instance) => instance.id === appId)

  const launchApp = () => {
    if (app) {
      switch (app.config.template) {
        case IAppTemplate.IMMERSIVE:
          if (runningInstance) {
            dispatch(terminateApp(app.id))
          }
        case IAppTemplate.WINDOW:
          //close all immersive apps
          runningApps.forEach((runningApp) => {
            if (runningApp.config.template === IAppTemplate.IMMERSIVE) {
              dispatch(terminateApp(runningApp.id))
            }
          })
        default:
          if (runningInstance) {
            dispatch(updateAppStatus([app, { isHidden: false }]))
          } else {
            dispatch(startApp(app))
          }
          break
      }
    }
  }
  return <span onClick={launchApp}>{children}</span>
}

export default AppLauncher
