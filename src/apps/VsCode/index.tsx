import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import VsCodeAppBar from "./VsCodeAppBar"
import { useDispatch } from "react-redux"
import { setStatusBar } from "src/core/redux/memory/memory.slice"
import VsCodeStatusBar from "./VsCodeStatusBar"


const VsCode = () => {
  const { setAppBarElement } = useAppContext()
  const dispatch = useDispatch();
  useEffect(() => {
    setAppBarElement(VsCodeAppBar)
    dispatch(setStatusBar(<VsCodeStatusBar />))
    return () => { }
  }, [])
  return <div>App Store</div>
}

export default VsCode
