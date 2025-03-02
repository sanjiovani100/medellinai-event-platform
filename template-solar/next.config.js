/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  // Add these for better Vercel compatibility
  reactStrictMode: true,
  // Ensure output is optimized for Vercel
  output: "standalone",
  // Disable ESLint during build
  eslint: {
    // Warning: This disables ESLint completely during build
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build
  typescript: {
    // Warning: This disables TypeScript checking completely during build
    ignoreBuildErrors: true,
  },
  // Add environment variables that should be exposed to the browser
  env: {
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://xivrhixmippoxuqelxlf.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdnJoaXhtaXBwb3h1cWVseGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDcyNzksImV4cCI6MjA1NjA4MzI3OX0.9myJwLp1kVNuHAYeTCGXXfoDZKZuq1uDyb9iR_jI9g8",
    NEXT_DISABLE_ESLINT: "1",
  },
}

module.exports = nextConfig
