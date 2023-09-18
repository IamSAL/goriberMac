import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MapsAppBar from "./MapsAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Maps = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MapsAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Maps</div>
}

export default Maps
