import React, { useEffect } from "react"
import SystemPreferencesAppBar from "./SystemPreferencesAppBar"
import { useAppContext } from "src/core/components/app-window/appContext"

const SystemPreferences = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(SystemPreferencesAppBar)
    return () => {}
  }, [])
  return <div>SystemPreferences</div>
}

export default SystemPreferences
