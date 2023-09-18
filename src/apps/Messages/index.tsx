import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MessagesAppBar from "./MessagesAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"

const Messages = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MessagesAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Messages</div>
}

export default Messages
