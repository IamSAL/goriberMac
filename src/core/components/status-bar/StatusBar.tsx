import React from "react"
import styles from "./StatusBar.module.scss"

import StatusBarItem from "./StatusBarItem"
import IconBattery from "src/assets/icons/System/Battery.svg"
import IconWifi from "src/assets/icons/System/Wi-Fi.svg"
import IconControl from "src/assets/icons/System/Control.svg"
import IconMoon from "src/assets/icons/System/Moon.svg"
import IconBrightness from "src/assets/icons/System/Brightness.svg"
import { cn } from "@utils"
import StatusBarClock from "./StatusBarClock"
import useMousePosition from "src/helpers/hooks/useMousePosition"
import { useSelector } from "react-redux"
import { AppState } from "src/core/redux/redux"
import StatusBarSystem from "./StatusBarSystem"

const StatusBar = () => {
  const { isTouchingTop } = useMousePosition({ offsetTop: 20, offsetBottom: 0 })
  const { isMaximized } = useSelector((state: AppState) => state.system)
  const isStatusBarHovered = false
  const shouldShow = isTouchingTop || !isMaximized || isStatusBarHovered

  console.log({ shouldShow })
  return (
    <div
      className={cn(styles.StatusBar, "flex z-[9999] justify-between align-middle px-[12px]")}
      style={{
        display: shouldShow ? "flex" : "none",
      }}
    >
      <div className="LeftSide flex align-middle gap-0">
        <StatusBarSystem />
        <StatusBarItem type="text" label="Code" className="font-semibold px-1" />
        <StatusBarItem type="text" label="File" />
        <StatusBarItem type="text" label="Edit" />
        <StatusBarItem type="text" label="Selection" />
        <StatusBarItem type="text" label="View" />
        <StatusBarItem type="text" label="Go" />
        <StatusBarItem type="text" label="Run" />
        <StatusBarItem type="text" label="Terminal" />
        <StatusBarItem type="text" label="Window" />
        <StatusBarItem type="text" label="Help" />
      </div>
      <div className={cn(`RightSide flex align-middle gap-0 `, styles.RightSide)}>
        <StatusBarItem type="icon" icon={<IconMoon color="white" fontSize={"26px"} />} />
        <StatusBarItem type="icon" icon={<IconBattery color="white" fontSize={"26px"} />} />
        <StatusBarItem type="icon" icon={<IconWifi color="white" fontSize={"26px"} />} />
        <StatusBarItem type="icon" icon={<IconControl color="white" fontSize={"26px"} />} />

        <StatusBarClock />
      </div>
    </div>
  )
}

export default StatusBar
