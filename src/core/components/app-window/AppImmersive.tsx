import React, { useRef } from "react"
import { IApp } from "@types"
import { AppContext, IAppContext } from "./appContext"
import { useDispatch } from "react-redux"
import { terminateApp } from "src/core/redux/memory/memory.slice"
import { useClickAway, useKey } from "react-use"

const AppBody = React.memo(
  ({ component, ...props }: any) => component(props),
  () => true
)

interface IAppProps {
  app: IApp
}

const AppImmersive = React.memo((props: IAppProps) => {
  const { app } = props
  const dispatch = useDispatch()
  const programRef = useRef(null)
  useKey("Escape", () => dispatch(terminateApp(app.id)))
  //@ts-expect-error
  const appContextValues: IAppContext = {
    app,
    onTerminate: () => dispatch(terminateApp(app.id)),
  }
  return (
    <AppContext.Provider value={appContextValues}>
      <div className=" h-screen w-screen z-[999] absolute top-0" ref={programRef}>
        <AppBody component={app.component} />
      </div>
    </AppContext.Provider>
  )
})

export default AppImmersive
