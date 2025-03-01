import { SupabaseExample } from "../../components/SupabaseExample"

export const metadata = {
  title: "Supabase Direct Connection Demo",
  description: "Demonstration of connecting directly to Supabase without MCP",
}

export default function SupabaseDemoPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Supabase Direct Connection</h1>

      <div className="mb-8">
        <p className="mb-4 text-gray-600">
          This page demonstrates a direct connection to Supabase without using
          MCP. The connection uses the anon/public key and is subject to Row
          Level Security (RLS) policies.
        </p>

        <div className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">Connection Details</h2>
          <p className="mb-2">
            <span className="font-medium">Project URL:</span>{" "}
            <code className="rounded bg-gray-100 px-2 py-1">
              https://xivrhixmippoxuqelxlf.supabase.co
            </code>
          </p>
          <p>
            <span className="font-medium">Connection Type:</span>{" "}
            <span className="font-medium text-green-600">Direct (No MCP)</span>
          </p>
        </div>
      </div>

      <SupabaseExample />
    </div>
  )
}
