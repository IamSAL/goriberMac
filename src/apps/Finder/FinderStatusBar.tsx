import React, { Fragment } from "react"
import AppControl from "src/core/components/app-window/AppControl"
import { StatusBarItem } from "@components"

const FinderStatusBar = () => {
  return (
    <Fragment>
      <StatusBarItem type="text" label="Finder" className="font-semibold px-1" />
      <StatusBarItem type="text" label="File" />
      <StatusBarItem type="text" label="Edit" />

      <StatusBarItem type="text" label="View" />
      <StatusBarItem type="text" label="Go" />

      <StatusBarItem type="text" label="Window" />
      <StatusBarItem type="text" label="Help" />
    </Fragment>
  )
}

export default FinderStatusBar
