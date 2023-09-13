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
  const currentStatusBar = useSelector((state: AppState) => state.memory.statusBar)
  const isStatusBarHovered = false
  const shouldShow = isTouchingTop || !isMaximized || isStatusBarHovered

  return (
    <div
      className={cn(styles.StatusBar, "flex z-[9999] justify-between align-middle px-[12px]")}
      style={{
        display: shouldShow ? "flex" : "none",
      }}
    >
      <div className="LeftSide flex align-middle gap-0">
        <StatusBarSystem />
        {currentStatusBar}
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
