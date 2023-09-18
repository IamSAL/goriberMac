import React, { useEffect } from "react"
import SystemPreferencesAppBar from "./SystemPreferencesAppBar"
import { useAppContext } from "src/core/components/app-window/appContext"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const SystemPreferences = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SystemPreferencesAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>SystemPreferences</div>
}

export default SystemPreferences
