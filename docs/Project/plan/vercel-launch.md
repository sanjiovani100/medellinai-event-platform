# Vercel Deployment: Simple Fix for 404 Error

## Problem

When accessing https://medellinai-event-platform.vercel.app/, we encounter:

```
404: NOT_FOUND
Code: NOT_FOUND
ID: iad1::kvms6-1740872936452-869129e40d2b
```

## Simple Step-by-Step Fix

### 1. Configure Root Directory in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select the `medellinai-event-platform` project
3. Click on "Settings" tab
4. Scroll down to "Build & Development Settings"
5. Set "Root Directory" to `template-solar`
6. Click "Save" to preserve your changes

### 2. Add Environment Variables

1. Go to "Settings" tab
2. Click on "Environment Variables" in the left sidebar
3. You'll see a form with fields for:

   - Key (e.g. CLIENT_KEY)
   - Value
   - And a dropdown for environments

4. **To add the first variable:**

   - In the "key" field, enter: `NEXT_PUBLIC_SUPABASE_URL`
   - In the "value" field, enter: `https://xivrhixmippoxuqelxlf.supabase.co`
   - Leave "Environments" as default (All Environments)
   - Click the "Add" button (appears after typing in both fields)

5. **To add the second variable:**

   - In the "key" field, enter: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - In the "value" field, enter: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpdnJoaXhtaXBwb3h1cWVseGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MDcyNzksImV4cCI6MjA1NjA4MzI3OX0.9myJwLp1kVNuHAYeTCGXXfoDZKZuq1uDyb9iR_jI9g8`
   - Leave "Environments" as default (All Environments)
   - Click the "Add" button

6. Also check the "Automatically expose System Environment Variables" option at the bottom of the page

### 3. Force New Deployment

1. Go to "Deployments" tab
2. Find the latest deployment
3. Click the three dots (⋮) menu
4. Select "Redeploy"
5. Check "Clear cache and redeploy" option
6. Click "Redeploy"

### 4. Check Root Directory Configuration

After redeploying, if you still see 404 errors:

1. Go back to Settings → General
2. Ensure that Root Directory is set to `template-solar`
3. If you've made changes, save and redeploy again

### 5. If Issues Persist

If the 404 error persists after making these changes:

1. Check deployment logs for any specific errors
2. Verify that the repository structure has not changed
3. Try creating a new project in Vercel by importing the repository again
4. Select the `template-solar` directory during import
5. Configure the same environment variables

## Important Files

To ensure Vercel deploys correctly, check that these files exist in your repository:

1. `/template-solar/next.config.js` (not .ts)
2. `/template-solar/vercel.json`
3. `/vercel.json` (at repository root)

These configuration files tell Vercel how to build and deploy your project correctly.
