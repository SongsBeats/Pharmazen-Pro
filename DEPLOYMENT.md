# PharmaZen - Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your project is now ready for Vercel deployment! The following changes have been made:

1. ✅ Removed "Watch Demo" button from Hero Section
2. ✅ Deleted ProductDemo component (`src/components/ProductDemo.tsx`)
3. ✅ Removed all ProductDemo imports and references
4. ✅ Build tested successfully
5. ✅ Vercel configuration file exists (`vercel.json`)

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended for First-Time)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Remove watch demo functionality and prepare for deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `SongsBeats/PharmaZen-Web`
   - Click "Import"

4. **Configure Project**
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (already configured in vercel.json)
   - **Output Directory**: `dist` (already configured in vercel.json)
   - **Install Command**: `npm install` (already configured in vercel.json)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For production deployment
   vercel --prod
   
   # For preview deployment
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No (first time) or Yes (subsequent deployments)
   - Project name: pharmazen (or your preferred name)
   - Directory: `./`
   - Override settings: No (vercel.json will be used)

## 🔧 Environment Variables (If Needed)

If your project uses any environment variables, add them in Vercel:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables (e.g., API keys, database URLs)
4. Redeploy if needed

## 📝 Post-Deployment

After successful deployment:

1. **Custom Domain** (Optional)
   - Go to "Settings" → "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Test Your Site**
   - Visit your deployment URL
   - Test all features
   - Check mobile responsiveness

3. **Enable Analytics** (Optional)
   - Go to "Analytics" tab
   - Enable Vercel Analytics for visitor insights

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## 📊 Build Configuration

Your `vercel.json` is already configured:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "outputDirectory": "dist"
}
```

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### 404 Errors on Routes
- Vercel automatically handles SPA routing for Vite projects
- If issues persist, add to `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Environment Variables Not Working
- Ensure variables are prefixed with `VITE_` for Vite projects
- Example: `VITE_API_URL` instead of `API_URL`
- Redeploy after adding environment variables

## 📱 Performance Optimization

Your site is already optimized with:
- ✅ Vite for fast builds
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification

## 🎉 You're All Set!

Your PharmaZen landing page is ready for deployment. The "Watch Demo" functionality has been completely removed, and the project builds successfully.

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
