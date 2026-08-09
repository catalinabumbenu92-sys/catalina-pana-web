# Vercel Deployment Setup Guide

Your GitHub repository is ready: https://github.com/catalinabumbenu92-sys/catalina-pana-web

## Step 1: Connect to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account (or create a new account)
3. Click **"New Project"**
4. Select **"Import Git Repository"**
5. Search for and select: **catalina-pana-web**
6. Click **"Import"**

## Step 2: Vercel will automatically detect your configuration

- **Framework Preset**: Node.js
- **Build Command**: `pnpm install && pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

These are already configured in your `vercel.json` file.

## Step 3: Add Environment Variables

In the Vercel project settings, go to **Settings → Environment Variables** and add these variables:

### Required Environment Variables

```
DATABASE_URL=your_mysql_database_connection_string
JWT_SECRET=your_jwt_secret_key_here
VITE_APP_ID=your_manus_oauth_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
OWNER_OPEN_ID=your_owner_open_id
OWNER_NAME=Cătălina Pană
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your_manus_api_key
VITE_FRONTEND_FORGE_API_KEY=your_frontend_api_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint_or_leave_empty
VITE_ANALYTICS_WEBSITE_ID=your_analytics_website_id_or_leave_empty
VITE_APP_TITLE=Cătălina — Business online cu AI și produse digitale
VITE_APP_LOGO=your_logo_url_or_leave_empty
NODE_ENV=production
```

### How to add Environment Variables:

1. In Vercel project dashboard, go to **Settings**
2. Click **Environment Variables**
3. For each variable:
   - Enter **Name** (e.g., `DATABASE_URL`)
   - Enter **Value** (your actual value)
   - Select **Production** (or all environments)
   - Click **Save**

## Step 4: Deploy

1. After adding all environment variables, click **"Deploy"**
2. Vercel will automatically:
   - Build your project
   - Run the build command: `pnpm install && pnpm run build`
   - Deploy to production
   - Provide you with a live URL

## Step 5: Connect Custom Domain (Optional)

To connect your custom domain `catalinapana.ro`:

1. In Vercel project dashboard, go to **Settings → Domains**
2. Click **"Add Domain"**
3. Enter: `catalinapana.ro`
4. Follow the DNS configuration instructions
5. Update your domain's DNS records to point to Vercel

## Website Features (Already Configured)

✓ All Stan Store CTA buttons working (opening in new tabs)
✓ Instagram link working (opens in new tab)
✓ "Cătălina Pană" branding in header and footer
✓ Mobile accordion menu with all sections
✓ Professional portrait photo
✓ All original design preserved
✓ Responsive on desktop and mobile

## Troubleshooting

### Build Fails
- Check that all environment variables are set correctly
- Verify `DATABASE_URL` is accessible from Vercel
- Check Vercel build logs for specific errors

### Website Shows Blank Page
- Check browser console for errors
- Verify environment variables are set
- Check that database is accessible

### Database Connection Error
- Ensure `DATABASE_URL` is correct and accessible from Vercel's servers
- If using a private database, you may need to whitelist Vercel's IP addresses

## Support

For more information:
- Vercel Docs: https://vercel.com/docs
- GitHub Repository: https://github.com/catalinabumbenu92-sys/catalina-pana-web
- Project Structure: See README.md in repository
