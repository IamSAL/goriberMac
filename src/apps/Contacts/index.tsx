import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import ContactsAppBar from "./ContactsAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"


const Contacts = () => {
  const { setAppBarElement, setStatusBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(ContactsAppBar)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [])
  return <div>Contacts</div>
}

export default Contacts
