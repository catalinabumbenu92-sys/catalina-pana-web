# Vercel Deployment Guide

This project is ready for production deployment on Vercel.

## Quick Start

1. **Push to GitHub**
   - Commit all files including `vercel.json` and `.vercelignore`
   - Push to your GitHub repository

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the `vercel.json` configuration

3. **Set Environment Variables**
   In Vercel Project Settings → Environment Variables, add:
   
   ```
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret_key
   VITE_APP_ID=your_oauth_app_id
   OAUTH_SERVER_URL=https://api.manus.im
   VITE_OAUTH_PORTAL_URL=https://portal.manus.im
   OWNER_OPEN_ID=your_owner_id
   OWNER_NAME=Cătălina Pană
   BUILT_IN_FORGE_API_URL=https://api.manus.im
   BUILT_IN_FORGE_API_KEY=your_api_key
   VITE_FRONTEND_FORGE_API_KEY=your_frontend_key
   VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
   VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
   VITE_ANALYTICS_WEBSITE_ID=your_website_id
   VITE_APP_TITLE=Cătălina — Business online cu AI
   VITE_APP_LOGO=your_logo_url
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your project

## Project Structure

```
dist/
├── index.js          # Express server with tRPC API
├── public/           # Frontend assets
│   ├── index.html    # Main HTML file
│   └── assets/       # CSS and JS bundles
└── package.json      # Dependencies
```

## Build Process

The `vercel.json` configuration:
- Runs: `pnpm install && pnpm run build`
- Outputs: `dist` folder
- Uses Node.js 22.x runtime
- Routes API calls to Express server
- Serves frontend from public folder

## Features

✓ Express + tRPC backend
✓ React frontend with Tailwind CSS
✓ User authentication (Manus OAuth)
✓ Database integration
✓ All Stan Store CTA buttons working
✓ Mobile accordion menu
✓ Instagram social link
✓ Professional branding

## Support

For issues, check:
- Vercel deployment logs
- Environment variables are set correctly
- Database connection is accessible
- All required secrets are provided
