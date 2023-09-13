import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MapsAppBar from "./MapsAppBar"

const Maps = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MapsAppBar)
    return () => {}
  }, [])
  return <div>Maps</div>
}

export default Maps
