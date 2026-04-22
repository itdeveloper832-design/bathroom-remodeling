# 🚀 FTP Deployment Fix - ARZ Home Remodeling

## ✅ ISSUE FIXED

**Problem:** Website showing "Index of /" (directory listing) instead of loading index.html

**Root Cause:** 
- `next.config.js` had `output: 'standalone'` (server-side deployment)
- Needed `output: 'export'` for static FTP deployment

## 📋 CHANGES MADE

### 1. Updated `next.config.js`
- Changed `output: 'standalone'` → `output: 'export'`
- Removed server-side headers/rewrites (incompatible with static export)
- Kept image optimization for static generation

### 2. Updated `package.json`
- `"export": "next build"` (builds to `/out` folder)
- `"deploy:netlify": "netlify deploy --prod --dir=out"` (correct output dir)

### 3. Created GitHub Actions Workflow
- File: `.github/workflows/deploy.yml`
- Triggers on push to `main` branch
- Builds project → Deploys `/out` folder to FTP

### 4. Created `.htaccess` for FTP Server
- File: `public/.htaccess`
- Disables directory listing
- Routes all requests to `index.html` (SPA routing)

## 🔧 SETUP INSTRUCTIONS

### Step 1: Add GitHub Secrets
Go to GitHub repo → Settings → Secrets and add:
- `FTP_URL`: `ftp://your-domain.com`
- `FTP_USER`: Your FTP username
- `FTP_PASSWORD`: Your FTP password

### Step 2: Deploy Manually (First Time)
```bash
pnpm install
pnpm run build
```

This creates `/out` folder with static files.

### Step 3: Upload to FTP
Upload **ONLY** the contents of `/out` folder to `public_html/`:
- `index.html` (homepage)
- `_next/` (Next.js assets)
- `*.html` (all generated pages)
- `.htaccess` (from public folder)

**IMPORTANT:** 
- Upload to `public_html/` NOT root
- Overwrite existing files
- Delete old `.next/` folder if present

### Step 4: Verify Deployment
1. Visit https://arzhomeremodeling.com
2. Should load homepage (NOT directory listing)
3. Check browser console for no 404 errors

## 🚀 AUTOMATED DEPLOYMENT

After setup, every push to `main` branch will:
1. ✅ Install dependencies
2. ✅ Build static export
3. ✅ Deploy `/out` to FTP automatically

## ⚠️ IMPORTANT NOTES

### API Routes Disabled
The following API routes won't work with static export:
- `/api/admin/login`
- `/api/admin/logout`

**Solution:** Move admin functionality to:
- Separate Node.js backend (Vercel, Heroku, etc.)
- Or use client-side authentication (Firebase, Auth0)

### Admin Pages
Admin pages (`/admin/*`) are still generated as static HTML but won't have backend functionality. Consider:
- Hosting admin separately
- Using Firebase for authentication
- Using third-party admin service

## 📊 BUILD OUTPUT

After `pnpm run build`, you'll have:
```
out/
├── index.html                    # Homepage
├── about/index.html              # About page
├── contact/index.html            # Contact page
├── bathroom-remodeling/index.html
├── chandler-az-85248/index.html  # Location pages
├── _next/                        # Next.js assets
│   ├── static/
│   └── image/
└── [all other pages as .html]
```

## ✅ VERIFICATION CHECKLIST

- [ ] `next.config.js` has `output: 'export'`
- [ ] `package.json` export script points to `/out`
- [ ] `.github/workflows/deploy.yml` created
- [ ] `public/.htaccess` created
- [ ] GitHub secrets configured (FTP_URL, FTP_USER, FTP_PASSWORD)
- [ ] First manual build successful (`pnpm run build`)
- [ ] `/out` folder contains `index.html`
- [ ] Uploaded `/out` contents to `public_html/`
- [ ] Website loads without directory listing
- [ ] All pages accessible (test homepage, about, contact)

## 🆘 TROUBLESHOOTING

### Still seeing "Index of /"
1. Check `.htaccess` is in `public_html/` root
2. Verify `index.html` exists in `public_html/`
3. Check FTP permissions (644 for files, 755 for directories)
4. Restart web server or clear cache

### Pages showing 404
1. Verify all `.html` files uploaded
2. Check file permissions
3. Ensure `.htaccess` rewrite rules are working

### Build fails
1. Run `pnpm install` first
2. Check for TypeScript errors: `pnpm run build`
3. Ensure no API routes are being called during build

## 📞 SUPPORT

For issues:
1. Check build logs in GitHub Actions
2. Verify FTP upload completed
3. Check `.htaccess` syntax
4. Test with simple HTML file first

---

**Status:** ✅ READY TO DEPLOY  
**Last Updated:** 2024
