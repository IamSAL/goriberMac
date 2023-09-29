import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISizes, IWidget } from "@types"
import { apps } from "src/misc/placeholder-data/apps"
import { v1 as uuid } from "uuid"
//@ts-expect-error
const initialState: ISystemState = {
  isMaximized: false,
  widgets: [],
}

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setMaximized: (state, action: PayloadAction<boolean>) => {
      return { ...state, isMaximized: action.payload }
    },
    addWidget: (state, action: PayloadAction<ISystemWidget>) => {
      return { ...state, widgets: [...state.widgets, { id: uuid(), ...action.payload }] }
    },
    removeWidget: (state, action: PayloadAction<ISystemWidget>) => {
      return {
        ...state,
        widgets: [...state.widgets.filter((w) => w.id !== action.payload.id)],
      }
    },
  },
})

export const { setMaximized, addWidget, removeWidget } = systemSlice.actions
export default systemSlice.reducer
export type ISystemWidget = { id?: string; widget: IWidget; size: ISizes; order?: number }
interface ISystemState {
  isMaximized: boolean
  General: General
  Display: Display
  Sound: Sound
  widgets: Array<ISystemWidget>
}
export interface General {
  Appearance: string
  AccentColor: string
  HighlightColor: string
  SidebarIconSize: string
  AutoHideMenuBar: boolean
}

export interface Display {
  Brightness: number
  NightShift: NightShift
}

export interface NightShift {
  Enabled: boolean
  Schedule: Schedule
}

export interface Schedule {
  Start: string
  End: string
}

export interface Sound {
  OutputVolume: number
  InputVolume: number
  AlertVolume: number
  OutputDevice: string
  InputDevice: string
}
