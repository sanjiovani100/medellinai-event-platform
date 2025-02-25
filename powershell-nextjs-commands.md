# PowerShell Commands for Next.js Development

## Starting a Next.js Development Server

To start a Next.js development server in PowerShell, use the following commands:

```powershell
# Navigate to the project directory
cd template-solar

# Start the development server using pnpm
pnpm run dev
```

## Important Notes

1. Always use separate commands or semicolons (`;`) for command chaining in PowerShell
2. Do not use ampersand (`&&`) for command chaining as it's not valid in PowerShell
3. When running a development server, make sure you're in the correct project directory first

## Common Next.js Commands

```powershell
# Install dependencies
pnpm install

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linting
pnpm run lint