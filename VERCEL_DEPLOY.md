# Vercel Deployment Guide

Your project is now configured for Vercel deployment.

## What Was Configured

1. **Serverless Functions**: Created Vercel serverless functions in the `api/` directory:
   - `api/ping.ts` → `/api/ping`
   - `api/demo.ts` → `/api/demo`
   - `api/contact.ts` → `/api/contact`

2. **Vercel Configuration**: Updated `vercel.json` with:
   - Build command: `pnpm run build:client`
   - Output directory: `dist/spa`
   - SPA routing (all routes serve `index.html`)
   - API routing to serverless functions
   - Proper caching headers for assets

3. **Dependencies**: Added `@vercel/node` for serverless function types

## Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically detect the configuration from `vercel.json`
6. Click "Deploy"

## Environment Variables

If you need environment variables (like `PING_MESSAGE`), add them in:
- **Vercel Dashboard**: Project Settings → Environment Variables
- **CLI**: Use `vercel env add`

## API Endpoints

Your API endpoints will be available at:
- `https://your-project.vercel.app/api/ping`
- `https://your-project.vercel.app/api/demo`
- `https://your-project.vercel.app/api/contact`

## Notes

- The Express server (`server/index.ts`) is only used for local development
- In production on Vercel, API routes use serverless functions from the `api/` directory
- Static assets are automatically cached with long-term headers
- All non-API routes serve `index.html` for React Router SPA functionality

## Build Process

Vercel will automatically:
1. Install dependencies with `pnpm install`
2. Run `pnpm run build:client` (as specified in `vercel.json`)
3. Deploy the static files from `dist/spa`
4. Deploy serverless functions from the `api/` directory

