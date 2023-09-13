import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import FinderAppBar from "./FInderAppBar"
import FinderStatusBar from "./FinderStatusBar"

const Finder = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(FinderAppBar)
    setStatusBarElement(<FinderStatusBar />)
    return () => { }
  }, [])
  return <div>Finder</div>
}

export default Finder
