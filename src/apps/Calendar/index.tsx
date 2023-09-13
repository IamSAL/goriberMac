import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import CalendarAppBar from "./CalendarAppBar"

const Calendar = () => {
  const { setAppBarElement } = useAppContext()
  useEffect(() => {
    setAppBarElement(CalendarAppBar)
    return () => {}
  }, [])
  return <div>Calendar</div>
}

export default Calendar
