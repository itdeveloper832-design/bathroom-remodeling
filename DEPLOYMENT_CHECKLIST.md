# Deployment Checklist for ARZ Home Remodeling

## Pre-Deployment
- [ ] Run `npm run build` to generate latest files
- [ ] Verify `out/` folder contains 500+ files
- [ ] Check that `out/index.html` exists
- [ ] Verify `out/.htaccess` exists
- [ ] Confirm all changes are committed to git
- [ ] Test locally with `npm run dev` (optional)

## Deployment Steps

### Step 1: Backup Current Files
- [ ] Connect to cPanel via FTP or File Manager
- [ ] Navigate to `public_html/`
- [ ] Create a backup folder: `public_html/backup-[DATE]/`
- [ ] Copy all current files to backup folder
- [ ] Note the backup location for rollback if needed

### Step 2: Remove Old Structure
- [ ] Delete `public_html/arzhomeremodeling.com/` folder completely
- [ ] Delete any old `public_html/out/` folder if it exists
- [ ] Keep the backup folder intact
- [ ] Clear any cache folders if they exist

### Step 3: Upload New Files
- [ ] Upload entire contents of local `out/` folder to `public_html/`
- [ ] Ensure `.htaccess` is included in upload
- [ ] Ensure `index.html` is in root of `public_html/`
- [ ] Ensure `_next/` folder is uploaded with all contents
- [ ] Verify all 500+ files were transferred

### Step 4: Verify Permissions
- [ ] Set folder permissions to 755 (rwxr-xr-x)
- [ ] Set file permissions to 644 (rw-r--r--)
- [ ] Note: Most modern hosting handles this automatically

### Step 5: Test Deployment
- [ ] Visit https://arzhomeremodeling.com/ in browser
- [ ] Verify homepage loads (NOT showing "Index of /")
- [ ] Check that styling loads correctly
- [ ] Click several internal links
- [ ] Test responsive design on mobile
- [ ] Check browser console (F12) for errors
- [ ] Verify images load properly
- [ ] Test contact form if present
- [ ] Check that HTTPS is enforced

## Post-Deployment

### Immediate Verification (5-10 minutes after upload)
- [ ] Site is accessible and loads
- [ ] No 404 errors on homepage
- [ ] CSS and images display correctly
- [ ] Navigation works
- [ ] Clear browser cache and test again

### Browser Testing (within 1 hour)
- [ ] Chrome - desktop and mobile
- [ ] Firefox - desktop and mobile
- [ ] Safari - desktop and mobile (if available)
- [ ] Edge - desktop

### Content Verification (within 24 hours)
- [ ] All pages are accessible
- [ ] Forms work correctly
- [ ] Links are not broken
- [ ] SEO meta tags are present
- [ ] Sitemap.xml is accessible
- [ ] robots.txt is accessible

### Performance Check (within 24 hours)
- [ ] Page loads quickly
- [ ] Images are optimized
- [ ] No console errors
- [ ] Analytics are tracking (if configured)
- [ ] Check Google PageSpeed Insights

## Rollback Plan (If Issues Occur)

If something goes wrong immediately:

1. [ ] Connect to cPanel via FTP
2. [ ] Delete contents of `public_html/`
3. [ ] Restore from backup folder: `public_html/backup-[DATE]/`
4. [ ] Site returns to previous state
5. [ ] Investigate the issue before re-deploying

## Update Frequency

- [ ] Updates deployed: __________ (date)
- [ ] Next scheduled update: __________ (date)
- [ ] Deployed by: __________ (name)
- [ ] Notes: __________________________________________________________________

## Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| Still showing directory listing | Verify `.htaccess` in root, clear cache |
| Styles not loading | Check `_next/` folder exists, verify permissions |
| 404 errors on pages | Check `.htaccess` rewrite rules in cPanel |
| HTTPS not working | Verify SSL certificate is active in cPanel |
| Images not showing | Check image paths are correct, verify upload |

---

**Important Reminder:** Always backup before deploying changes to production!
