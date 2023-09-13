import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import VsCodeAppBar from "./VsCodeAppBar"
import { useDispatch } from "react-redux"

import VsCodeStatusBar from "./VsCodeStatusBar"


const VsCode = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(<VsCodeAppBar />)
    setStatusBarElement(<VsCodeStatusBar />)
    return () => { }
  }, [])
  return <div>Vs code</div>
}

export default VsCode
