import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-5 transition-all duration-300 ease-in-out will-change-transform ${className}`}>
      <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#D946EF] to-[#8B5CF6] transition-all duration-300 ease-in-out will-change-transform select-none">
        Medellín
      </div>
      
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 transition-all duration-300 ease-in-out will-change-transform select-none"
        style={{ aspectRatio: '1/1' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="50%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Outer circle with gradient */}
        <circle cx="30" cy="30" r="25" stroke="url(#logoGradient)" strokeWidth="5" fill="none" />
        
        {/* Inner circle with white fill */}
        <circle cx="30" cy="30" r="15" fill="white" />
        
        {/* AI text */}
        <text
          x="30"
          y="35"
          textAnchor="middle"
          fill="url(#logoGradient)"
          style={{ fontSize: "16px", fontWeight: "bold" }}
        >
          AI
        </text>
      </svg>
    </div>
  );
};