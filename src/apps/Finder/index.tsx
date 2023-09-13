import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import FinderAppBar from "./FInderAppBar"

const Finder = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(FinderAppBar)
    return () => {}
  }, [])
  return <div>Finder</div>
}

export default Finder
