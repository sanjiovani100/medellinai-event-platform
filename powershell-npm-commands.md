# PowerShell Commands for Node.js and npm Projects

This reference guide provides PowerShell syntax specifically for working with Node.js and npm projects.

## Command Separator

PowerShell uses semicolons (`;`) to separate commands on a single line:

```powershell
# Multiple commands on one line
cd template-solar; npm install; npm run dev
```

## Directory Navigation and npm Commands

```powershell
# Change directory and run npm install
cd template-solar; npm install

# Change directory and start development server
cd template-solar; npm run dev

# Change directory and build for production
cd template-solar; npm run build

# Change directory and start production server
cd template-solar; npm start

# Run commands with npm arguments
cd template-solar; npm run build -- --profile
```

## Environment Variables

```powershell
# Set environment variable for the current session
$env:NODE_ENV = "development"; npm run dev

# Set multiple environment variables
$env:NODE_ENV = "production"; $env:DEBUG = "app:*"; npm start

# One-time environment variable for a command
$env:NEXT_TELEMETRY_DISABLED = "1"; npm run dev
```

## PowerShell Script Blocks

```powershell
# Using script blocks for more complex operations
cd template-solar; if ($?) { npm run build } else { Write-Error "Failed to change directory" }

# Conditional execution with environment variables
$env:NODE_ENV = "production"; cd template-solar; npm run build
```

## Error Handling

```powershell
# Set error action preference
$ErrorActionPreference = "Stop"; cd template-solar; npm install

# Try/catch block
try {
  cd template-solar
  npm install
  npm run build
} catch {
  Write-Error "Build process failed: $_"
}
```

## Vercel Deployment Commands

```powershell
# Install dependencies
cd template-solar; npm install

# Build for production
cd template-solar; npm run build

# Deploy to Vercel
cd template-solar; npx vercel --prod
```

## Package.json Script Examples

When defining scripts in package.json for PowerShell:

```json
{
  "scripts": {
    "install": "cd template-solar; npm install",
    "dev": "cd template-solar; npm run dev",
    "build": "cd template-solar; npm run build",
    "start": "cd template-solar; npm start",
    "lint": "cd template-solar; npm run lint"
  }
}
```

## Command Differences (Bash vs PowerShell)

| Bash                      | PowerShell                        |
| ------------------------- | --------------------------------- |
| `cd dir && npm install`   | `cd dir; npm install`             |
| `NODE_ENV=prod npm start` | `$env:NODE_ENV="prod"; npm start` |
| `echo $PATH`              | `echo $env:PATH`                  |
| `export VAR=value`        | `$env:VAR="value"`                |

## Useful One-Liners for Next.js Development

```powershell
# Create a new Next.js app
npx create-next-app@latest my-app

# Install dependencies and start dev server
cd my-app; npm install; npm run dev

# Build and analyze bundle size
cd template-solar; npm run build; npm run analyze

# Clean install dependencies and cache
cd template-solar; npm cache clean --force; Remove-Item -Recurse -Force node_modules; npm install
```
