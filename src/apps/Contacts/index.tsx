import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import ContactsAppBar from "./ContactsAppBar"


const Contacts = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(ContactsAppBar)
    return () => { }
  }, [])
  return <div>Contacts</div>
}

export default Contacts
