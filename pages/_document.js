import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../layouts/default";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  )
}