import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import Script from "next/script"

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnload" onLoad={() => {
        console.log('window.FB has been loaded')
      }} />
      <Image src={'/images/profile.jpeg'} width={200} height={200} />
      <h1>First Post</h1>
      <h2>
        <Link href={'/'}>
          Back
        </Link>
      </h2>
    </>
  )
}