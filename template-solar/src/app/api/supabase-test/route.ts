import { NextResponse } from "next/server"
import { supabase } from "../../../lib/supabase"

/**
 * GET /api/supabase-test
 *
 * This API route tests the Supabase connection and returns information
 * about the available tables in the database.
 */
export async function GET() {
  try {
    // First, test if we can connect to Supabase at all
    const { error: versionError } = await supabase.rpc("version")

    // If we can't even connect, return an error
    if (versionError && versionError.message.includes("not found")) {
      // Try a different approach - just check if we can connect
      const { error: healthError } = await supabase
        .from("_health")
        .select("*")
        .limit(1)

      if (healthError) {
        // Check if we can at least get the service status
        const { data: serviceData, error: serviceError } =
          await supabase.auth.getSession()

        if (serviceError) {
          return NextResponse.json(
            {
              status: "error",
              message: "Failed to connect to Supabase",
              error: serviceError.message,
            },
            { status: 500 },
          )
        }

        return NextResponse.json({
          status: "partial",
          message: "Connected to Supabase Auth but database tables not found",
          data: {
            connection: "auth_only",
            auth_status: serviceData ? "authenticated" : "not_authenticated",
            note: "Database tables need to be created",
          },
        })
      }
    }

    // Try to get a list of tables
    try {
      const { data: tablesData, error: tablesError } = await supabase
        .from("information_schema.tables")
        .select("table_name")
        .eq("table_schema", "public")
        .order("table_name")

      if (tablesError) {
        return NextResponse.json({
          status: "partial",
          message: "Connected to Supabase but cannot list tables",
          data: {
            connection: "ok",
            note: "The anon key doesn't have permission to list tables",
          },
        })
      }

      // Extract table names from the query result
      const tables = tablesData?.map((row) => row.table_name) || []

      if (tables.length === 0) {
        return NextResponse.json({
          status: "success",
          message: "Connected to Supabase but no tables found",
          data: {
            connection: "ok",
            tables: [],
            note: "Database is empty. Tables need to be created.",
          },
        })
      }

      return NextResponse.json({
        status: "success",
        message: "Successfully connected to Supabase",
        data: {
          connection: "ok",
          tables,
          note: "Database connection successful and tables found.",
        },
      })
    } catch (_) {
      // If we can't list tables, return a partial success
      return NextResponse.json({
        status: "partial",
        message: "Connected to Supabase but cannot list tables",
        data: {
          connection: "ok",
          note: "The anon key doesn't have permission to list tables or no tables exist",
        },
      })
    }
  } catch (error) {
    console.error("Error testing Supabase connection:", error)
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to Supabase",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
