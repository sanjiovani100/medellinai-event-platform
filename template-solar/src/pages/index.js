import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <Head>
        <title>Medellin AI Event Platform</title>
        <meta name="description" content="The Future of AI in Medellín" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-4xl rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-orange-500">
          Medellin AI Event Platform
        </h1>
        <p className="mb-8 text-xl text-gray-700">
          The Future of AI in Medellín
        </p>
        <p className="mb-8 text-gray-600">
          Welcome to the Medellin AI Event Platform. This is a temporary page
          while we resolve deployment issues. The full application will be
          available soon.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/app"
            className="rounded-md bg-orange-500 px-6 py-2 font-medium text-white transition-colors hover:bg-orange-600"
          >
            Go to App
          </Link>
          <a
            href="https://github.com/sanjiovani100/medellinai-event-platform"
            className="rounded-md bg-gray-200 px-6 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300"
          >
            GitHub
          </a>
        </div>
      </main>

      <footer className="mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Medellin AI. All rights reserved.
      </footer>
    </div>
  )
}
