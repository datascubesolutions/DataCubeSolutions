# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Project Structure ✓
- [x] Next.js app is in `frontend/` directory
- [x] `package.json` exists with build scripts
- [x] `next.config.js` is configured
- [x] `tsconfig.json` is configured
- [x] `app/layout.tsx` exists (root layout)

### 2. Vercel Configuration ✓
- [x] `vercel.json` file created
- [x] Framework set to "nextjs"

### 3. Environment Variables Required

**IMPORTANT:** Add this in Vercel Dashboard before deploying:

```
NEXT_PUBLIC_API_URL=https://your-backend-app.onrender.com
```

---

## 🚀 Deployment Steps

### Step 1: Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your Git repository
4. Select the repository containing your frontend

### Step 2: Configure Project Settings

**Root Directory:** 
- Set to: `frontend`
- This tells Vercel where your Next.js app is located

**Framework Preset:**
- Should auto-detect: **Next.js**

**Build Command:**
- Default: `npm run build` (should work automatically)

**Output Directory:**
- Default: `.next` (should work automatically)

**Install Command:**
- Default: `npm install` (should work automatically)

### Step 3: Add Environment Variables

1. Go to **Settings** → **Environment Variables**
2. Add:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** Your Render backend URL (e.g., `https://datascube-backend.onrender.com`)
   - **Environment:** Select all (Production, Preview, Development)
3. Click **Save**

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete
3. Your site will be live at: `https://data-scube-solutions.vercel.app/`

---

## 🔍 Troubleshooting

### Issue: Build Fails
- Check if `npm install` completes successfully
- Verify all dependencies in `package.json`
- Check build logs in Vercel dashboard

### Issue: Environment Variables Not Working
- Make sure variable name starts with `NEXT_PUBLIC_`
- Redeploy after adding environment variables
- Check that variable is added to all environments

### Issue: API Calls Failing
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check your Render backend is running
- Verify CORS is configured on backend to allow Vercel domain

### Issue: Root Directory Not Found
- In Vercel project settings, set **Root Directory** to `frontend`
- This is critical for monorepo setups

---

## 📝 Current Configuration

- **Frontend Path:** `DataCubeSolutions/frontend/`
- **Framework:** Next.js 14.2.3
- **Build Command:** `npm run build`
- **Vercel URL:** `https://data-scube-solutions.vercel.app/`

---

## ✅ Post-Deployment Verification

1. Visit: `https://data-scube-solutions.vercel.app/`
2. Check browser console for errors
3. Test API calls (contact form, etc.)
4. Verify environment variables are loaded

---

## 🔗 Important Links

- Vercel Dashboard: https://vercel.com/dashboard
- Your Project: https://vercel.com/dashboard (select your project)
- Live Site: https://data-scube-solutions.vercel.app/

