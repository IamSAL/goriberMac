import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ISystemState {
  isMaximized: boolean
}
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
