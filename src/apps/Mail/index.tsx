import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MailAppBar from "./MailAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Mail = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MailAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Mail</div>
}

export default Mail
