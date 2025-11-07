# Vercel Deployment Environment Variables

## Required Environment Variables

Add these in your Vercel project settings:
**Project Settings > Environment Variables**

### Backend API URL
```
NEXT_PUBLIC_API_URL=https://data-scube-be.onrender.com
```

**Backend URL:** `https://data-scube-be.onrender.com`

---

## Quick Setup Steps

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your project: **data-scube-solutions**
3. Go to **Settings** > **Environment Variables**
4. Add the following variable:
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://data-scube-be.onrender.com`
   - **Environment:** Production, Preview, and Development (select all)
5. Click **Save**
6. Redeploy your application if it's already deployed

---

## Current Configuration

Your Render backend is at: `https://data-scube-be.onrender.com`

```
NEXT_PUBLIC_API_URL=https://data-scube-be.onrender.com
```

---

## Notes

- The `NEXT_PUBLIC_` prefix is required for Next.js to expose this variable to the browser
- Make sure your Render backend URL includes `https://` protocol
- Don't add a trailing slash at the end of the URL
- After adding environment variables, you may need to trigger a new deployment

---

## Your Vercel URL

Your frontend will be live at: **https://data-scube-solutions.vercel.app/**

