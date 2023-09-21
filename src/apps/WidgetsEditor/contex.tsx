import { IApp, IWidget } from "@types"
import React, { Dispatch, SetStateAction } from "react"

export interface IWidgetEditorContext {
  searchTerm: string
  setsearchTerm: React.Dispatch<string>
  selectedAppId?: number
  setselectedAppId: React.Dispatch<number | number>
  matchedApps: IApp[]
  matchedWidgets: IWidget[]
}
export const dummyContext: IWidgetEditorContext = {
  searchTerm: "",
  setsearchTerm: () => {},

  setselectedAppId: () => {},
  matchedApps: [],
  matchedWidgets: [],
}
export const WidgetEditorContext = React.createContext<IWidgetEditorContext>(dummyContext)

export const useWidgetEditorContext = () => {
  return React.useContext(WidgetEditorContext)
}
