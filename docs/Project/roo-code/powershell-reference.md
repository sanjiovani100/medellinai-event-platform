# PowerShell Commands Reference for Roo

This reference guide provides common PowerShell commands and syntax patterns for use with the Medellin AI Platform development.

## Basic Command Structure

PowerShell commands follow a `Verb-Noun` naming convention:

```powershell
Get-Process                  # Lists all running processes
Get-ChildItem               # Lists files and directories (similar to ls/dir)
Set-Location C:/Users       # Changes directory (similar to cd)
```

## Command Execution

```powershell
# Single command
Get-ChildItem

# Multiple commands on one line (separated by semicolons)
Set-Location C:/Users; Get-ChildItem

# Piping output between commands
Get-Process | Where-Object { $_.CPU -gt 10 }

# Command with parameters
Get-ChildItem -Path C:/Users -Filter *.txt -Recurse
```

## Directory and File Operations

```powershell
# Navigation
Set-Location path/to/directory    # Change directory
Push-Location path/to/directory   # Change directory and save previous location
Pop-Location                      # Return to previous location

# Listing files
Get-ChildItem                     # List files in current directory
Get-ChildItem -Path C:/Users      # List files in specific directory
Get-ChildItem -Recurse            # List files recursively
Get-ChildItem -Filter *.js        # List only .js files

# File operations
New-Item -Path file.txt -ItemType File               # Create new file
New-Item -Path new_directory -ItemType Directory     # Create new directory
Copy-Item source.txt destination.txt                 # Copy files
Move-Item source.txt destination.txt                 # Move files
Remove-Item file.txt                                 # Delete file
```

## NextJS Project Commands

```powershell
# Installation
npm install                        # Install dependencies
npm install package-name           # Install specific package

# Development
npm run dev                        # Start development server
npm run build                      # Build for production
npm run start                      # Start production server
npm run lint                       # Run ESLint

# Using npx
npx create-next-app new-project    # Create new Next.js project
npx next telemetry disable         # Disable telemetry
```

## Working with Git

```powershell
# Basic git commands
git init                           # Initialize repository
git clone https://github.com/user/repo.git   # Clone repository
git add .                          # Stage all changes
git commit -m "message"            # Commit changes
git push                           # Push to remote

# Git with PowerShell
git status | Select-String "modified"   # Filter git status output
```

## Error Handling

```powershell
# Using try/catch
try {
    # Code that might fail
    Get-Content missing-file.txt
} catch {
    # Error handling
    Write-Error "An error occurred: $_"
}

# Setting error preference
$ErrorActionPreference = "Stop"    # Make all errors terminating
$ErrorActionPreference = "Continue"   # Default - continue on non-terminating errors
```

## Environment Variables

```powershell
# Get environment variable
$env:PATH                          # Access PATH variable
$env:USERPROFILE                  # User profile directory

# Set environment variable (session only)
$env:CUSTOM_VARIABLE = "value"

# Set environment variable (permanently)
[System.Environment]::SetEnvironmentVariable("CUSTOM_VARIABLE", "value", "User")
```

## PowerShell for Web Development

```powershell
# Testing HTTP endpoints
Invoke-WebRequest -Uri "http://localhost:3000"

# Working with JSON
$json = Get-Content -Path data.json | ConvertFrom-Json
$json.property = "new value"
$json | ConvertTo-Json | Set-Content -Path data.json

# Opening browser
Start-Process "http://localhost:3000"
```

## Execution Policy

```powershell
# Check current execution policy
Get-ExecutionPolicy

# Set execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Common Aliases

PowerShell provides aliases for common commands:

```powershell
cd          # Set-Location
ls, dir     # Get-ChildItem
rm, del     # Remove-Item
cp          # Copy-Item
mv          # Move-Item
cat, type   # Get-Content
echo, write # Write-Output
pwd         # Get-Location
```

## Project-Specific Commands

```powershell
# Installing dependencies
cd ./template-solar; npm install

# Running development server
cd ./template-solar; npm run dev

# Building for production
cd ./template-solar; npm run build

# Executing scripts with parameters
cd ./medellinai; npm run script -- --parameter value
```

## Formatting and Output

```powershell
# Format as table
Get-Process | Format-Table Name,CPU,ID

# Format as list
Get-Process | Format-List Name,CPU,ID

# Select specific properties
Get-Process | Select-Object Name,CPU,ID

# Sort output
Get-Process | Sort-Object CPU -Descending
```

## PowerShell and Node.js

```powershell
# Check Node.js version
node -v

# Check npm version
npm -v

# Create package.json
npm init -y

# Run a Node.js script
node script.js

# NPM scripts with PowerShell variables
$env:DEBUG = "app:*"; npm start
```

## Troubleshooting

```powershell
# Check if port is in use
Get-NetTCPConnection -LocalPort 3000

# Kill process by ID
Stop-Process -Id 1234

# Find process using a port
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# Check disk space
Get-PSDrive C
```

## PowerShell Remoting

```powershell
# Enable remoting
Enable-PSRemoting -Force

# Test connection
Test-WSMan -ComputerName localhost

# Create remote session
Enter-PSSession -ComputerName server-name
```

## Security Considerations

```powershell
# Check script content before execution
Get-Content -Path script.ps1

# Run script with restricted execution
PowerShell -ExecutionPolicy Bypass -File script.ps1

# Check file hash
Get-FileHash -Path file.zip -Algorithm SHA256
```

## Command History and Help

```powershell
# View command history
Get-History

# Get help for a command
Get-Help Get-Process

# Get detailed help with examples
Get-Help Get-Process -Detailed

# Update help documentation
Update-Help
```
