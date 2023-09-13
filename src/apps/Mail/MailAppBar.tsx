import React, { useEffect } from "react"
import AppControl from "src/core/components/app-window/AppControl"
import { useAppContext } from "src/core/components/app-window/appContext"
import Toolbar from "src/core/components/common/toolbars/Toolbar"

const MailAppBar = () => {
  return (
    <div className="w-full h-12 bg-white rounded-tl-lg rounded-tr-lg flex items-center justify-between px-4">
      <div className="control flex items-center gap-2">
        <AppControl />
      </div>
    </div>
  )
}

export default MailAppBar
