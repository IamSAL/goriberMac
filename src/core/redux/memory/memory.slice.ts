import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IApp, TAppStatus } from "@types"
import { updateAppsInstances, removeAppInstance, updateAppStatuses } from "./memory.utils"

interface IMemoryState {
  appsInstances: Array<IApp>
}
const initialState: IMemoryState = {
  appsInstances: [],
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
  },
})

export const { startApp, terminateApp, updateAppStatus } = memorySlice.actions
export default memorySlice.reducer
