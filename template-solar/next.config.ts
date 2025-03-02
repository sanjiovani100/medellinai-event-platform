import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  // Add these for better Vercel compatibility
  reactStrictMode: true,
  // Ensure output is optimized for Vercel
  output: "standalone",
  // Add environment variables that should be exposed to the browser
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://xivrhixmippoxuqelxlf.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdnJoaXhtaXBwb3h1cWVseGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDcyNzksImV4cCI6MjA1NjA4MzI3OX0.9myJwLp1kVNuHAYeTCGXXfoDZKZuq1uDyb9iR_jI9g8",
  },
}

export default nextConfig
