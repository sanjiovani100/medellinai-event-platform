import { RiArrowRightLine, RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "../Fade"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section
      aria-label="hero"
      className="relative isolate min-h-[70vh] overflow-hidden bg-gradient-to-b from-[#f0562e] to-[#f97316]"
    >
      <FadeContainer className="relative flex flex-col items-center justify-center pt-32 pb-12">
        <FadeDiv className="mx-auto">
          <a
            aria-label="View latest update the changelog page"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/10 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-white ring-1 shadow-lg shadow-orange-400/20 ring-white/10 filter backdrop-blur-[1px] transition-colors hover:bg-white/[5%] focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border border-white/20 bg-white/20 px-2.5 py-1 text-sm text-white sm:text-xs">
                New
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">AI Community Events</span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-white" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <FadeSpan>The Future of AI</FadeSpan>
          <br />
          <FadeSpan>in Medellín</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-white/80 sm:mt-8 sm:text-lg">
          <FadeSpan>
            Join the community shaping the future of artificial intelligence
          </FadeSpan>
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <FadeDiv>
            <a
              className="inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md bg-white px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-orange-500 shadow-lg transition-all duration-200 ease-in-out hover:bg-white/90"
              href="/events"
            >
              Discover Events
            </a>
          </FadeDiv>
          <FadeDiv>
            <a
              className="inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white transition-all duration-200 ease-in-out hover:text-white/80"
              href="/register"
            >
              Join Community
              <RiArrowRightLine className="size-4" />
            </a>
          </FadeDiv>
        </div>
        <div className="absolute inset-0 -z-10 flex transform-gpu items-center justify-center overflow-hidden backdrop-blur-sm">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
