import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import MessagesAppBar from "./MessagesAppBar"

const Messages = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(MessagesAppBar)
    return () => {}
  }, [])
  return <div>Messages</div>
}

export default Messages
