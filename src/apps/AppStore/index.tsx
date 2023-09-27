import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import AppStoreAppBar from "./AppStoreAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"


const AppStore = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(AppStoreAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>App Store</div>
}

export default AppStore
