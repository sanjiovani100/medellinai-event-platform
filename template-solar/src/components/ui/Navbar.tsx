"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"
import { Logo } from "../Logo"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-gray-200/50 bg-white px-3 py-3 transition duration-300",
        scrolled || open ? "shadow-2xl shadow-black/5" : "",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Medellin AI Logo</span>
            <Logo />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-6 font-medium">
              <Link
                className="px-2 py-1 text-gray-900 transition-colors hover:text-orange-500"
                href={siteConfig.baseLinks.home}
              >
                Home
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 transition-colors hover:text-orange-500"
                href={siteConfig.baseLinks.events}
              >
                Events
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 transition-colors hover:text-orange-500"
                href={siteConfig.baseLinks.resources}
              >
                Resources
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 transition-colors hover:text-orange-500"
                href={siteConfig.baseLinks.community}
              >
                Community
              </Link>
              <Link
                className="px-2 py-1 text-gray-900 transition-colors hover:text-orange-500"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>
            </div>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <Link href={siteConfig.auth.signIn}>
              <Button variant="ghost" className="h-10 font-medium">
                Sign In
              </Button>
            </Link>
            <Link href={siteConfig.auth.register}>
              <Button
                variant="primary"
                className="h-10 bg-orange-500 font-medium text-white hover:bg-orange-600"
              >
                Register
              </Button>
            </Link>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "Close Navigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.home}>Home</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.events}>Events</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.resources}>Resources</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.community}>Community</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <Link href={siteConfig.auth.signIn}>
              <Button variant="ghost" className="w-full justify-center text-lg">
                Sign In
              </Button>
            </Link>
            <Link href={siteConfig.auth.register}>
              <Button
                variant="primary"
                className="w-full justify-center bg-orange-500 text-lg text-white hover:bg-orange-600"
              >
                Register
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
