import {
  RiFacebookFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "@remixicon/react"
import Link from "next/link"
import { Logo } from "../Logo"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const sections = {
    quickLinks: {
      title: "Quick Links",
      items: [
        { label: "About Us", href: "#" },
        { label: "Upcoming Events", href: "#" },
        { label: "Become a Speaker", href: "#" },
        { label: "Community Guidelines", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  }

  return (
    <div className="px-4 xl:px-0">
      <footer
        id="footer"
        className="relative mx-auto flex max-w-6xl flex-wrap justify-between pt-4"
      >
        {/* Vertical Lines */}
        <div className="pointer-events-none inset-0">
          {/* Left */}
          <div
            className="absolute inset-y-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}
          >
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-300"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>

          {/* Right */}
          <div
            className="absolute inset-y-0 right-0 my-[-5rem] w-px"
            style={{
              maskImage: "linear-gradient(transparent, white 5rem)",
            }}
          >
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                className="stroke-gray-300"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
        </div>
        <svg
          className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300"
          // style={{
          //   maskImage:
          //     "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          // }}
        >
          <defs>
            <pattern
              id="diagonal-footer-pattern"
              patternUnits="userSpaceOnUse"
              width="64"
              height="64"
            >
              {Array.from({ length: 17 }, (_, i) => {
                const offset = i * 8
                return (
                  <path
                    key={i}
                    d={`M${-106 + offset} 110L${22 + offset} -18`}
                    stroke=""
                    strokeWidth="1"
                  />
                )
              })}
            </pattern>
          </defs>
          <rect
            stroke="none"
            width="100%"
            height="100%"
            fill="url(#diagonal-footer-pattern)"
          />
        </svg>
        <div className="flex w-full flex-col justify-between lg:w-1/4">
          <Link
            href="/"
            className="flex items-center font-medium text-gray-700 select-none sm:text-sm"
          >
            <Logo className="ml-2 w-20" />
            <span className="sr-only">Medellin AI Logo (go home)</span>
          </Link>

          <div className="mt-4 ml-2 text-sm text-gray-600">
            <p className="mb-3">
              Empowering Medellín&apos;s AI community through knowledge sharing,
              networking, and innovative events.
            </p>
            <p className="mb-2">
              <span className="font-medium">Contact:</span>{" "}
              contact@medellinai.com
            </p>
            <p className="mb-4">
              <span className="font-medium">Location:</span> Medellín, Colombia
            </p>
          </div>

          <div>
            <div className="mt-2 flex items-center">
              {/* Social Icons */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiLinkedinFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiFacebookFill className="size-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
              >
                <RiWhatsappFill className="size-5" />
              </Link>
            </div>
            <div className="mt-4 ml-2 text-sm text-gray-700">
              &copy; {CURRENT_YEAR} Medellin AI Community
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        {Object.entries(sections).map(([key, section]) => (
          <div
            key={key}
            className="mt-10 min-w-44 pl-2 lg:mt-0 lg:w-1/4 lg:pl-0"
          >
            <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.label} className="text-sm">
                  <Link
                    href={item.href}
                    className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Stay Connected Section */}
        <div className="mt-10 min-w-44 pl-2 lg:mt-0 lg:w-1/4 lg:pl-0">
          <h3 className="mb-4 font-medium text-gray-900 sm:text-sm">
            Stay Connected
          </h3>
          <div className="space-y-4">
            <Link
              href="#"
              className="inline-block rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
            >
              Join our community
            </Link>
            <div className="mt-4">
              <Link
                href="#"
                className="flex items-center text-sm text-gray-600 hover:text-gray-900"
              >
                <RiWhatsappFill className="mr-2 size-5 text-green-500" />
                Join our WhatsApp group
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
