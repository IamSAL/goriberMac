import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import FinderAppBar from "./FInderAppBar"
import FinderStatusBar from "./FinderStatusBar"

const Finder = () => {
  const { setAppBarElement, setStatusBarElement, app } = useAppContext()
  useEffect(() => {
    setAppBarElement(FinderAppBar)
    setStatusBarElement(<FinderStatusBar />)
    return () => { }
  }, [])
  return <div>Finder {app?.status.isMAXIMIZED ? "max" : "min"}</div>
}

export default Finder
