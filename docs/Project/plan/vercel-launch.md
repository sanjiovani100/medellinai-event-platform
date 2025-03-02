# Vercel Deployment Troubleshooting Guide

## Problem: 404 NOT_FOUND Error

When accessing the deployed site at https://medellinai-event-platform.vercel.app/, we encounter the following error:

```
404: NOT_FOUND
Code: NOT_FOUND
ID: iad1::kvms6-1740872936452-869129e40d2b
```

This error indicates that Vercel cannot find the appropriate files to serve for the application.

## Root Causes & Solutions

### 1. Project Configuration Issues

#### Symptoms:

- 404 error on all routes
- No specific build errors in logs
- Deployment shows as "completed" but site is not accessible

#### Solutions:

1. **Verify Framework Detection**:

   - Ensure Vercel correctly identifies the project as a Next.js application
   - Check Project Settings → Framework Preset is set to "Next.js"

2. **Check Build Settings**:

   - Verify Build Command: `npm run build`
   - Verify Output Directory: `.next`
   - Add an explicit `vercel.json` configuration:
     ```json
     {
       "version": 2,
       "buildCommand": "npm run build",
       "installCommand": "npm install",
       "framework": "nextjs",
       "outputDirectory": ".next"
     }
     ```

3. **Ensure Proper Entry Files**:
   - For App Router: Verify `app/page.tsx` exists
   - For Pages Router: Verify `pages/index.js` exists
   - Add fallback static HTML in `public/index.html`

### 2. Deployment Process Issues

#### Symptoms:

- Successful build but 404 on access
- Deployment logs show no errors

#### Solutions:

1. **Force Clear Cache and Redeploy**:

   - In Vercel Dashboard → Deployments → Latest Deployment → ⋮ → Redeploy
   - Enable "Clear Cache and Deploy" option

2. **Check Branch Deployment Settings**:

   - Verify the correct branch is being deployed
   - Ensure production branch is set correctly (usually `main` or `master`)

3. **Verify Environment Variables**:
   - Check if required environment variables are set in Vercel
   - Add environment variables through Project Settings → Environment Variables

### 3. Domain Configuration Issues

#### Symptoms:

- 404 error specifically on custom domain
- Different behavior between \*.vercel.app and custom domain

#### Solutions:

1. **Check Domain Settings**:

   - Verify domain is properly configured in Vercel
   - Ensure DNS records are correctly set up
   - Check for "Domain Not Found" status in Domains section

2. **Verify SSL/TLS Configuration**:
   - Ensure SSL is properly configured
   - Check for certificate errors

### 4. Package Manager Compatibility

#### Symptoms:

- Build succeeds locally but fails on Vercel
- Dependency-related errors in build logs

#### Solutions:

1. **Use Compatible Package Manager**:

   - If using pnpm, ensure Vercel supports it or switch to npm
   - Add `.npmrc` file with appropriate settings:
     ```
     legacy-peer-deps=true
     engine-strict=false
     ```

2. **Lock File Consistency**:
   - Ensure package-lock.json or yarn.lock is committed to repository
   - Delete node_modules locally and reinstall before pushing

### 5. Region-Specific Issues

#### Symptoms:

- 404 errors from specific regions
- Error ID contains region identifier (e.g., "iad1")

#### Solutions:

1. **Specify Deployment Regions**:

   - Add regions configuration to vercel.json:
     ```json
     {
       "regions": ["iad1", "sfo1", "bru1"]
     }
     ```

2. **Check Region Availability**:
   - Verify the specified region is available for your account tier

## Immediate Action Plan

1. **Verify Project Structure**:

   - Ensure both App Router (`app/page.tsx`) and Pages Router (`pages/index.js`) entry points exist
   - Add fallback static HTML file in public directory

2. **Update Configuration**:

   - Add comprehensive vercel.json with explicit settings
   - Configure package manager compatibility settings

3. **Force Redeploy**:

   - Trigger a new deployment with cache cleared
   - Monitor build logs for any errors

4. **Check Vercel Dashboard**:

   - Verify project settings match repository structure
   - Ensure all required environment variables are set

5. **Contact Vercel Support**:
   - If issues persist, provide the error ID (iad1::kvms6-1740872936452-869129e40d2b)
   - Share repository access with Vercel support if needed

## Long-term Recommendations

1. **Simplify Project Structure**:

   - Choose either App Router or Pages Router, not both
   - Follow Vercel's recommended project structure

2. **Implement Monitoring**:

   - Add status monitoring for early detection of deployment issues
   - Set up alerts for deployment failures

3. **Document Deployment Process**:

   - Create a deployment checklist for team members
   - Document environment variable requirements

4. **Implement CI/CD Pipeline**:
   - Add pre-deployment tests to catch issues before they reach Vercel
   - Use GitHub Actions to validate builds before deployment
