# Vercel Deployment Troubleshooting

## Issue: Configuration Conflict Error

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

### Prevention Tips

1. **Avoid multiple configuration files**:

   - Use a single `vercel.json` at the project root
   - Don't create additional vercel.json files in subdirectories

2. **Use modern Next.js configuration patterns**:

   - For routing, use Next.js App Router or Pages Router instead of Vercel's `routes`
   - For redirects and rewrites, use Next.js configuration rather than Vercel-specific settings

3. **Check for conflicts before deployment**:
   - Ensure your configuration doesn't mix incompatible settings
   - Remember: `routes` cannot be used with `rewrites`, `redirects`, `headers`, `cleanUrls`, or `trailingSlash`

### Resources

- [Vercel Configuration Documentation](https://vercel.com/docs/projects/project-configuration)
- [Next.js Configuration Documentation](https://nextjs.org/docs/app/api-reference/next-config-js)
