import { createSlice, PayloadAction } from "@reduxjs/toolkit"

//@ts-expect-error
const initialState: ISystemState = {
  isMaximized: false,
}

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setMaximized: (state, action: PayloadAction<boolean>) => {
      return { ...state, isMaximized: action.payload }
    },
  },
})

export const { setMaximized } = systemSlice.actions
export default systemSlice.reducer

interface ISystemState {
  isMaximized: boolean
  General: General
  Display: Display
  Sound: Sound
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
