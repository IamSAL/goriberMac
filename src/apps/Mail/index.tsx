import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MailAppBar from "./MailAppBar"

const Mail = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MailAppBar)
    return () => {}
  }, [])
  return <div>Mail</div>
}

export default Mail
