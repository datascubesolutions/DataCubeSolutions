# Vercel Deployment Setup - Fix "No Next.js version detected"

## 🔴 Problem

Error: "No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies". Also check your Root Directory setting matches the directory of your package.json file."

## ✅ Solution

This is a **monorepo** structure. Vercel needs to know where your Next.js app is located.

### Step 1: Configure Root Directory in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **data-scube-solutions**
3. Go to **Settings** → **General**
4. Scroll down to **Root Directory**
5. Click **Edit**
6. Set Root Directory to: `DataCubeSolutions/frontend`
7. Click **Save**

### Step 2: Verify Configuration

After setting the Root Directory, Vercel should:
- ✅ Detect Next.js automatically
- ✅ Find `package.json` in `DataCubeSolutions/frontend/`
- ✅ Use the correct build commands

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or push a new commit to trigger auto-deploy

## 📁 Project Structure

```
Datascube/
├── DataCubeSolutions/
│   └── frontend/          ← Vercel Root Directory should point here
│       ├── package.json   ← Contains "next": "14.2.3"
│       ├── vercel.json
│       ├── next.config.js
│       └── app/
└── data-scube-BE/         ← Backend (separate deployment)
```

## 🔍 Verification Checklist

After setting Root Directory:

- [ ] Vercel detects Next.js framework
- [ ] Build logs show: "Installing dependencies from `package.json`"
- [ ] Build succeeds without "No Next.js version detected" error
- [ ] Deployment completes successfully

## 🐛 If Still Not Working

### Option 1: Check Root Directory Path

Make sure the path is exactly: `DataCubeSolutions/frontend`

**Not:**
- ❌ `frontend`
- ❌ `DataCubeSolutions/frontend/` (with trailing slash)
- ❌ `./DataCubeSolutions/frontend`

### Option 2: Verify package.json Location

The `package.json` with Next.js should be at:
```
DataCubeSolutions/frontend/package.json
```

Verify it contains:
```json
{
  "dependencies": {
    "next": "14.2.3",
    ...
  }
}
```

### Option 3: Check Build Logs

1. Go to **Deployments** → Select a deployment
2. Click **Build Logs**
3. Look for:
   - "Detected Next.js version: 14.2.3" ✅
   - "No Next.js version detected" ❌

### Option 4: Manual Override (if needed)

If Root Directory doesn't work, you can create a `vercel.json` at repository root:

**Create:** `/vercel.json` (at repository root)
```json
{
  "buildCommand": "cd DataCubeSolutions/frontend && npm install && npm run build",
  "outputDirectory": "DataCubeSolutions/frontend/.next",
  "installCommand": "cd DataCubeSolutions/frontend && npm install",
  "framework": "nextjs"
}
```

But **preferred method** is using Root Directory setting in dashboard.

## 📝 Environment Variables

Don't forget to set:
```
NEXT_PUBLIC_API_URL=https://data-scube-be.onrender.com
```

In: **Settings** → **Environment Variables**

---

**Last Updated:** 2025-01-07

