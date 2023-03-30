import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>University Profile</title>
        <meta name="description" content="Profile university app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center">
        <div className="h-[100vh] w-[38rem] bg-[#2B3543] opacity-50 shadow-2xl"></div>
      </main>
    </>
  )
}
