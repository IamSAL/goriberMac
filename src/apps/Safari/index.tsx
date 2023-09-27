import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import SafariAppBar from "./SafariAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Safari = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SafariAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])

  return <div>Safari</div>
}

export default Safari
