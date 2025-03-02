# Vercel Deployment Guide

## Deployment Status Summary

- [x] COMPLETED: Fixed Configuration Conflict Error
- [x] COMPLETED: Consolidated configuration files
- [x] COMPLETED: Simplified Next.js configuration
- [x] COMPLETED: Configure Root Directory in Vercel (set to `template-solar`)
- [x] COMPLETED: Configure Node.js Version (set to 22.x)
- [x] COMPLETED: Enable "Prioritize Production Builds"
- [x] COMPLETED: Add Environment Variables
- [x] ATTEMPTED: Force New Deployment (failed with build errors)
- [x] COMPLETED: Fix build command directory errors with PowerShell-compatible commands
- [ ] TO DO: Resolve Framework Settings Discrepancy
- [ ] TO DO: Test new deployment with fixed configuration

## Initial Problem

When accessing https://medellinai-event-platform.vercel.app/, we encounter:

```
404: NOT_FOUND
Code: NOT_FOUND
ID: iad1::kvms6-1740872936452-869129e40d2b
```

## Issue 1: Configuration Conflict Error (RESOLVED)

**Error Message:**

```
If `rewrites`, `redirects`, `headers`, `cleanUrls` or `trailingSlash` are used, then `routes` cannot be present. Learn More
```

### Root Cause

This error occurs when Vercel detects conflicting configuration settings. Specifically:

1. You cannot use both `routes` and any of the following configuration options simultaneously:

   - `rewrites`
   - `redirects`
   - `headers`
   - `cleanUrls`
   - `trailingSlash`

2. Multiple configuration files can cause Vercel to merge settings in unexpected ways, creating conflicts.

### How We Fixed It

1. **Consolidated configuration files**:

   - Removed duplicate `vercel.json` inside template-solar directory
   - Kept only a single root-level `vercel.json`

2. **Simplified Next.js configuration**:

   - Removed duplicate Next.js configuration file (`next.config.js`)
   - Kept only `next.config.ts` for TypeScript support

3. **Ensured clean Vercel configuration**:
   ```json
   {
     "framework": "nextjs",
     "buildCommand": "cd template-solar && npm install && npm run build",
     "outputDirectory": "template-solar/.next",
     "installCommand": "cd template-solar && npm install",
     "regions": ["iad1"]
   }
   ```

## Step-by-Step Deployment Fix

### 1. Configure Root Directory in Vercel (COMPLETED)

1. ✅ Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. ✅ Select the `medellinai-event-platform` project
3. ✅ Click on "Settings" tab
4. ✅ Scroll down to "Build & Development Settings"
5. ✅ Set "Root Directory" to `template-solar`
6. ✅ Click "Save" to preserve your changes

### 1b. Configure Node.js Version (COMPLETED)

1. ✅ In the project settings under "Build & Development Settings"
2. ✅ Set Node.js Version to "22.x"
3. ✅ Save changes

### 1c. Enable Prioritize Production Builds (COMPLETED)

1. ✅ In the project settings
2. ✅ "Prioritize Production Builds" option has been enabled
3. ✅ This ensures builds for Production environment are prioritized over Pre-Production environments

### 1d. Framework Settings Discrepancy (TO DO)

There is currently a discrepancy between the Production deployment configuration and the Project Settings:

**Current Production Deployment:**

- Framework: Other (unknown)
- Current URL: medellinai-event-platform-qwo8uf10z-ai-socialmediavs-projects.vercel.app

**Current Project Settings:**

- Framework: Next.js
- Build Command: npm run build
- Output Directory: .next
- Install Command: npm install
- Development Command: next

This discrepancy needs to be resolved to ensure consistent deployments. Options:

1. Keep the Next.js framework settings and redeploy
2. Manually check why the production deployment is using "Other" framework

### 2. Add Environment Variables (COMPLETED)

1. ✅ Go to "Settings" tab
2. ✅ Click on "Environment Variables" in the left sidebar
3. ✅ Form with fields used successfully:

   - Key (e.g. CLIENT_KEY)
   - Value
   - And a dropdown for environments

4. ✅ **First variable added:**

   - Key: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://xivrhixmippoxuqelxlf.supabase.co`
   - Environment: All Environments
   - Added 1 hour ago

5. ✅ **Second variable added:**

   - Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (value secured)
   - Environment: All Environments
   - Added 1 hour ago

6. ✅ "Automatically expose System Environment Variables" option confirmed

### 3. Critical Build Error (FIXED)

The latest deployment attempt failed with the following error:

```
sh: line 1: cd: template-solar: No such file or directory
Error: Command "cd template-solar && npm install" exited with 1
```

**Root Cause:**
The build commands in vercel.json were attempting to access a `template-solar` directory that doesn't exist in the Vercel deployment environment, because:

1. The Root Directory was already set to `template-solar` in Vercel settings
2. Using `cd template-solar` in commands means Vercel was trying to find a nested directory inside the already-specified root

**Previous vercel.json configuration:**

```json
{
  "framework": "nextjs",
  "buildCommand": "cd template-solar && npm install && npm run build",
  "outputDirectory": "template-solar/.next",
  "installCommand": "cd template-solar && npm install",
  "regions": ["iad1"]
}
```

**Updated vercel.json with fixes (COMPLETED):**

```json
{
  "buildCommand": "npm install; npm run build",
  "outputDirectory": ".next",
  "regions": ["iad1"]
}
```

**Key fixes implemented:**

1. Removed redundant `cd template-solar` navigation since Root Directory is already set
2. Adjusted path for output directory to just `.next` (removing redundant path)
3. Used PowerShell-compatible command separator (`;` instead of `&&`)
4. Removed `installCommand` as it's included in the build command
5. Removed explicit framework setting to let Vercel auto-detect Next.js

### 3b. Force New Deployment (TO DO)

After fixing the vercel.json configuration:

1. Go to "Deployments" tab
2. Find the latest deployment
3. Click the three dots (⋮) menu
4. Select "Redeploy"
5. Check "Clear cache and redeploy" option
6. Click "Redeploy"

### 4. Verify Framework and Root Directory Configuration (TO DO)

After redeploying, if you still see 404 errors or framework detection issues:

1. Verify all key configuration settings:

   - Root Directory: Confirmed set to `template-solar`
   - Node.js Version: Confirmed set to 22.x
   - Framework: Should be Next.js (currently showing discrepancy)

2. Check for any other configuration mismatches

3. If you've made changes, save and redeploy again

### 5. If Issues Persist (AS NEEDED)

If the 404 error persists after making these changes:

1. Check deployment logs for any specific errors
2. Verify that the repository structure has not changed
3. Try creating a new project in Vercel by importing the repository again
4. Select the `template-solar` directory during import
5. Configure the same environment variables

## Important Files

To ensure Vercel deploys correctly, check that these files exist in your repository:

1. `/template-solar/next.config.ts` (updated from .js)
2. Remove duplicate `vercel.json` inside template-solar directory
3. `/vercel.json` (at repository root) - updated with PowerShell-compatible commands

## Prevention Tips

1. **Avoid multiple configuration files**:

   - Use a single `vercel.json` at the project root
   - Don't create additional vercel.json files in subdirectories

2. **Use modern Next.js configuration patterns**:

   - For routing, use Next.js App Router or Pages Router instead of Vercel's `routes`
   - For redirects and rewrites, use Next.js configuration rather than Vercel-specific settings

3. **Check for conflicts before deployment**:

   - Ensure your configuration doesn't mix incompatible settings
   - Remember: `routes` cannot be used with `rewrites`, `redirects`, `headers`, `cleanUrls`, or `trailingSlash`

4. **When using Root Directory setting:**
   - Do not include directory navigation commands in vercel.json
   - Adjust output and other paths relative to the root directory
   - Use appropriate command separators for your environment (`;` for PowerShell, `&&` for bash)

## Resources

- [Vercel Configuration Documentation](https://vercel.com/docs/projects/project-configuration)
- [Next.js Configuration Documentation](https://nextjs.org/docs/app/api-reference/next-config-js)
