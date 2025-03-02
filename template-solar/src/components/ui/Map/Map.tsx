// Map component

export const Map = () => {
  return (
    <section
      id="ai-revolution"
      aria-labelledby="revolution-title"
      className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-950 px-10 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
    >
      <div className="absolute left-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
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
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>
      <div className="absolute right-0 z-10 h-full backdrop-blur-[2px]">
        <svg
          className="h-full w-8 border-r border-zinc-900 stroke-zinc-800 sm:w-20"
          style={{
            maskImage:
              "linear-gradient(transparent, white 10rem, white calc(100% - 10rem), transparent)",
          }}
        >
          <defs>
            <pattern
              id="diagonal-border-pattern"
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
            width="100%"
            height="100%"
            fill="url(#diagonal-border-pattern)"
          />
        </svg>
      </div>

      <div className="pt-12 text-base font-semibold tracking-tight text-orange-400 sm:pt-20 sm:text-lg">
        Join Medellín&apos;s AI Revolution!
      </div>
      <h2
        id="revolution-title"
        className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
      >
        Connect, learn, and grow with top AI innovators
      </h2>
      <div className="mt-4 w-full max-w-5xl sm:mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg p-4 text-center md:text-left">
            <p className="text-gray-300 sm:text-lg">
              Exclusive events including meetups, workshops, and hackathons
              where you can engage with the AI community.
            </p>
          </div>
          <div className="rounded-lg p-4 text-center md:text-left">
            <p className="text-gray-300 sm:text-lg">
              Network and collaborate with AI professionals, startups, and
              researchers to expand your connections.
            </p>
          </div>
          <div className="rounded-lg p-4 text-center md:text-left">
            <p className="text-gray-300 sm:text-lg">
              Access premium resources with insights, tools, and training to
              accelerate your AI journey.
            </p>
          </div>
        </div>
        <div className="mt-8 mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-orange-500 px-6 py-2 font-medium text-white transition-colors hover:bg-orange-600"
          >
            Join Now
          </a>
          <a
            href="#"
            className="rounded-full bg-gray-800 px-6 py-2 font-medium text-white transition-colors hover:bg-gray-700"
          >
            Explore Events
          </a>
        </div>
      </div>
    </section>
  )
}
