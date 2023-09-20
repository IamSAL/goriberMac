import Document, { Html, Main, NextScript, Head } from "next/document"

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
          <link rel="manifest" href={"/manifest.json"} />
          <meta name={"theme-color"} content={"#1E1E1E"} />
        </Head>
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
