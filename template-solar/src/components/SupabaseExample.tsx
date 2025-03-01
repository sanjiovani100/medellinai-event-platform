"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

interface ExampleData {
  id: string | number
  name?: string
  title?: string
  description?: string
  created_at?: string
}

export function SupabaseExample() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ExampleData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [table, setTable] = useState("profiles")

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const { data, error } = await supabase.from(table).select("*").limit(5)

        if (error) {
          throw error
        }

        setData(data || [])
        setError(null)
      } catch (err) {
        console.error(`Error fetching data from ${table}:`, err)
        setError(
          `Failed to load data from ${table}. ${err instanceof Error ? err.message : "Unknown error"}`,
        )
        setData([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [table])

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Supabase Direct Connection Example
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTable("profiles")}
            className={`rounded px-3 py-1 ${
              table === "profiles" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Profiles
          </button>
          <button
            onClick={() => setTable("events")}
            className={`rounded px-3 py-1 ${
              table === "events" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Events
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-md bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="flex animate-pulse space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 rounded bg-gray-200"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Showing data from the <span className="font-medium">{table}</span>{" "}
              table
            </p>
          </div>

          {data.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              No data found in the {table} table.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th
                        key={key}
                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                      >
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data.map((item) => (
                    <tr key={item.id}>
                      {Object.entries(item).map(([key, value]) => (
                        <td
                          key={key}
                          className="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
                        >
                          {typeof value === "object"
                            ? JSON.stringify(value)
                            : String(value || "")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  )
}
