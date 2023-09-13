import { StatusBarItem } from '@components'

import React, { Fragment, useEffect } from 'react'
import { IAppContext, useAppContext } from 'src/core/components/app-window/appContext'


const CommonStatusBar = () => {
  const appContext = useAppContext()


  useEffect(() => {
    console.log("test", appContext.app?.name)

    return () => {

    }
  }, [appContext])


  return (
    <Fragment>
      <StatusBarItem type="text" label={appContext?.app?.name || ""} className="font-semibold px-1" />
      <StatusBarItem type="text" label="File" />
      <StatusBarItem type="text" label="Edit" />
      <StatusBarItem type="text" label="Selection" />
      <StatusBarItem type="text" label="View" />
      <StatusBarItem type="text" label="Go" />
      <StatusBarItem type="text" label="Run" />
      <StatusBarItem type="text" label="Terminal" />
      <StatusBarItem type="text" label="Window" />
      <StatusBarItem type="text" label="Help" />
    </Fragment>
  )
}

export default CommonStatusBar
