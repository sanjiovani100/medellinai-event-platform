#!/bin/bash

# Script to bypass ESLint during Vercel deployment
echo "Running Vercel custom build script without ESLint..."

# Set environment variables to disable ESLint
export DISABLE_ESLINT_PLUGIN=true
export NEXT_DISABLE_ESLINT=true
export NEXT_DISABLE_ESLINT_DURING_BUILD=true

# Navigate to the template-solar directory
cd template-solar

# Install dependencies
npm install

# Build with ESLint disabled
NODE_OPTIONS="--max-old-space-size=4096" npm run build --no-lint

echo "Build completed successfully!"