import { IApp } from "@types"
import React, { Dispatch, SetStateAction } from "react"

export interface IAppContext {
  app?: IApp
  AppBarElement?: React.ReactNode
  setAppBarElement: React.Dispatch<React.SetStateAction<JSX.Element>>
  onTerminate: () => void
  onHide: () => void
  onMinimize: () => void
  onMaximize: () => void
}
export const AppContext = React.createContext<IAppContext>({
  app: undefined,
  AppBarElement: undefined,
  setAppBarElement: () => {},
  onTerminate: () => null,
  onMinimize: () => null,
  onMaximize: () => null,
  onHide: () => null,
})

export const useAppContext = () => {
  return React.useContext(AppContext)
}
