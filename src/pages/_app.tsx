import { ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps } from "@blitzjs/next"
import { AuthenticationError, AuthorizationError } from "blitz"
import React, { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import "src/styles/globals.scss"
import "src/core/styles/index.scss"

import { ModalsProvider } from "@components"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "src/core/redux/redux"
import "../core/config/modals"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const progressBar = document.querySelector<HTMLDivElement>("#preloader-progress")
      const loader = document.getElementById("globalLoader")
      if (progressBar) {
        progressBar.style.width = `${100}%`
      }
      if (loader) {
        loader.classList.add(...["duration-1000", "opacity-0"])
        setTimeout(() => {
          loader.remove()
        }, 1500)
      }
    }
  }, [])
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ModalsProvider>
        <ErrorBoundary FallbackComponent={RootErrorFallback}>
          {getLayout(<Component {...pageProps} />)}
        </ErrorBoundary>
      </ModalsProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default withBlitz(MyApp)
