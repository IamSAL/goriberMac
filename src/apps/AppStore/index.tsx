import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import AppStoreAppBar from "./AppStoreAppBar"

const AppStore = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(AppStoreAppBar)
    return () => {}
  }, [])
  return <div>App Store</div>
}

export default AppStore
