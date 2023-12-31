import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IApp, TAppStatus } from "@types"
import { updateAppsInstances, removeAppInstance, updateAppStatuses } from "./memory.utils"
import { dummyContext, IAppContext } from "src/core/components/app-window/appContext"

interface IMemoryState {
  appsInstances: Array<IApp>
  activeAppContext?: IAppContext
}
const initialState: IMemoryState = {
  appsInstances: [],
  activeAppContext: dummyContext,
}

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    startApp: (state, action: PayloadAction<IApp>) => {
      return {
        ...state,
        appsInstances: updateAppsInstances(state.appsInstances, action.payload),
      }
    },
    updateAppStatus: (state, action: PayloadAction<[IApp, Partial<TAppStatus>]>) => {
      const [app, status] = action.payload
      return {
        ...state,
        appsInstances: updateAppStatuses(state.appsInstances, app, status),
      }
    },

    terminateApp: (state, action: PayloadAction<IApp["id"]>) => {
      const appId = action.payload
      return {
        ...state,
        appsInstances: removeAppInstance(state.appsInstances, appId),
      }
    },
    setActiveAppContext: (state, action: PayloadAction<IAppContext>) => {
      console.log("active app context changed", action.payload.app?.name)
      return {
        ...state,
        activeAppContext: action.payload,
      }
    },
  },
})

export const { startApp, terminateApp, updateAppStatus, setActiveAppContext } = memorySlice.actions
export default memorySlice.reducer
