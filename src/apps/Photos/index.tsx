import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import PhotosAppBar from "./PhotosAppBar"

const Photos = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(PhotosAppBar)
    return () => {}
  }, [])
  return <div>Photos</div>
}

export default Photos
