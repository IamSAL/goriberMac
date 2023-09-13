import React, { useEffect, useState } from "react"
import StatusBarItem from "./StatusBarItem"

const StatusBarClock = () => {
  const [currentTime, setcurrentTime] = useState("")
  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <StatusBarItem type="text" label={currentTime} className="min-w-[90px]" />
}

export default StatusBarClock
