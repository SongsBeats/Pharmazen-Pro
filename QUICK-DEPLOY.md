# Quick Deployment Commands

## 🚀 Deploy to Vercel - Quick Reference

### Step 1: Commit Your Changes
```bash
git add .
git commit -m "Remove watch demo functionality and prepare for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your repository: `SongsBeats/PharmaZen-Web`
5. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 📋 What Happens During Deployment

1. Vercel clones your repository
2. Runs `npm install` to install dependencies
3. Runs `npm run build` to build your project
4. Deploys the `dist` folder to their CDN
5. Gives you a live URL (e.g., `https://pharmazen.vercel.app`)

## ⚡ Auto-Deployment

After initial setup, Vercel automatically deploys:
- **Every push to main** → Production deployment
- **Every pull request** → Preview deployment

## 🔗 Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Documentation: https://vercel.com/docs
- Your Project: Will be at `https://your-project-name.vercel.app`

## 📝 Notes

- Build time: ~1-2 minutes
- Free tier includes: Unlimited deployments, 100GB bandwidth/month
- Custom domain: Can be added after deployment (free)

---

**Need detailed instructions?** See `DEPLOYMENT.md`
