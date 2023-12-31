import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import FinderAppBar from "./FInderAppBar"
import FinderStatusBar from "./FinderStatusBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Finder = () => {
  const { setAppBarElement, setStatusBarElement, app } = useAppContext()
  useEffect(() => {
    setAppBarElement(FinderAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Finder {app?.status.isMAXIMIZED ? "max" : "min"}</div>
}

export default Finder
