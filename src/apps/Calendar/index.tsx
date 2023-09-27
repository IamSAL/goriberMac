import React, { useEffect } from "react"
import { useAppContext } from "src/core/components/app-window/appContext"
import CalendarAppBar from "./CalendarAppBar"
import CommonStatusBar from "src/core/components/common/CommonStatusBar"


const Calendar = () => {
  const appContext = useAppContext()
  const { setAppBarElement, setStatusBarElement } = appContext;
  useEffect(() => {
    setAppBarElement(<CalendarAppBar />)
    setStatusBarElement(<CommonStatusBar />)
    return () => { }
  }, [setAppBarElement, setStatusBarElement])
  return <div>Calendar</div>
}

export default Calendar
