import type { SVGProps } from "react"

export const MedellinAILogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 200 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Simple text-based logo */}
    <text
      x="10"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="#0f172a"
    >
      Medellin
    </text>
    <text
      x="110"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="#F97316"
    >
      AI
    </text>
    {/* Simple icon element */}
    <circle cx="180" cy="25" r="15" fill="#F97316" opacity="0.8" />
  </svg>
)