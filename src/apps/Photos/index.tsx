import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import PhotosAppBar from "./PhotosAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Photos = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(PhotosAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Photos</div>
}

export default Photos
