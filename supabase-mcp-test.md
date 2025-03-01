# Supabase MCP Server for Medellin AI Platform

This document provides instructions on how to use the Supabase MCP server to interact with the Medellin AI Platform database using natural language.

## Setup

The Supabase MCP server has been configured in the Cline MCP settings file with the following connection details:

- **Connection String**: `postgresql://postgres:Toronto5000#@db.xivrhixmippoxuqelxlf.supabase.co:5432/postgres`

## Using the MCP Server

The Supabase MCP server provides tools for interacting with your PostgreSQL database. You can use natural language to query and manipulate your database.

### Example Queries

Here are some example natural language queries you can use with the Supabase MCP server:

#### Querying Events

```
Show me all events in the database
```

This will be translated to a query like:

```sql
SELECT * FROM events LIMIT 10;
```

#### Finding Users

```
Find all users with AI interests
```

This will be translated to a query like:

```sql
SELECT * FROM profiles WHERE ai_interests IS NOT NULL AND ai_interests != '[]' LIMIT 10;
```

#### Exploring Database Schema

```
What tables are in the database?
```

This will list all tables in the database.

```
Describe the structure of the events table
```

This will show the columns and their types for the events table.

## Database Schema

The Medellin AI Platform database includes the following main tables:

- `profiles`: User profiles and information
- `events`: Event details and metadata
- `venues`: Event venue information
- `event_categories`: Categories for events
- `blog_posts`: Blog content
- `user_connections`: User networking connections
- `forum_topics`: Community forum topics
- `ai_models`: AI model configurations

## Testing the Connection

To test if the MCP server is working correctly, you can ask Claude to:

1. List all tables in the database
2. Show the first 5 events
3. Count the number of registered users

## Troubleshooting

If you encounter issues with the MCP server:

1. Check that the connection string is correct
2. Verify that the database user has the necessary permissions
3. Restart VS Code to reload the MCP settings
4. Check the Claude logs for any error messages

## Security Considerations

The connection uses Row Level Security (RLS) policies defined in the database, ensuring that queries respect the permission model of the Medellin AI Platform.
