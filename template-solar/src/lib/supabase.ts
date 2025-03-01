import { createClient, SupabaseClient } from "@supabase/supabase-js"

/**
 * Supabase Direct Connection
 *
 * This file initializes and exports a Supabase client using environment variables
 * for the project URL and anon/public key. This connection does not use MCP and
 * connects directly to the Supabase project.
 */

// Supabase connection details from environment variables with fallbacks
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://xivrhixmippoxuqelxlf.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdnJoaXhtaXBwb3h1cWVseGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDcyNzksImV4cCI6MjA1NjA4MzI3OX0.9myJwLp1kVNuHAYeTCGXXfoDZKZuq1uDyb9iR_jI9g8"

// Initialize the Supabase client
export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseAnonKey,
)

// Export default for convenience
export default supabase
