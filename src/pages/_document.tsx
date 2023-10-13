/* eslint-disable @next/next/no-img-element */
import Document, { Html, Main, NextScript, Head } from "next/document"
import Script from "next/script"
import StartupScreen from "src/core/components/startup-screen/StartupScreen"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  render() {
    return (
      <Html lang="en">
        <Head>
          <style>
            {` body{
              display: block !important;
            }

            @keyframes applePulse {
  0% {

    opacity: 0.7;
  }
  50% {

    opacity: 1;
  }
  100% {

    opacity: 0.7;
  }
}

            #globalLoader {
  position: fixed;
  z-index: 99999;
  top: 50%;
  left: 50%;
background-color: #000;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}`}
          </style>
          <link rel="manifest" href={"/manifest.json"} />
          <meta name={"theme-color"} content={"#1E1E1E"} />
        </Head>
        <body className="dark">
          <StartupScreen />
          <Main />
          <NextScript />
          <Script src="/scripts/preloader.js" strategy="beforeInteractive" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
