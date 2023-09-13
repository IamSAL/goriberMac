import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import CalendarAppBar from "./CalendarAppBar"


const Calendar = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext;
  useEffect(() => {
    setAppBarElement(<CalendarAppBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <div>Calendar</div>
}

export default Calendar
