import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import SafariAppBar from "./SafariAppBar"

const Safari = () => {
  const { setAppBarElement, app } = useAppContext()
  useEffect(() => {
    setAppBarElement(SafariAppBar)
    return () => {}
  }, [])

  return <div>Safari</div>
}

export default Safari
