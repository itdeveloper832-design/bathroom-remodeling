# cPanel Deployment Guide for ARZ Home Remodeling

## Problem
Files are currently in `public_html/arzhomeremodeling.com/` instead of directly in `public_html/`, causing the server to display a directory listing instead of loading the website.

## Solution Summary
The Next.js project exports static files to the `out/` folder. These files must be deployed to the root of `public_html/`, not in a subdirectory.

## Step-by-Step Deployment Instructions

### Step 1: Build the Project
Run this command locally or on your cPanel server:
```bash
npm install
npm run build
```

This creates/updates the `out/` directory with all static files ready for deployment.

### Step 2: Access cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to `/home/digitalskills/public_html/`

### Step 3: Delete the Old Directory

1. Right-click on the `arzhomeremodeling.com` folder
2. Select **Delete**
3. Confirm the deletion

### Step 4: Upload Files to public_html Root

Option A: **Using File Manager (Simple)**
1. In cPanel File Manager, ensure you're in `/public_html/`
2. Drag and drop the contents of the `out/` folder directly into `public_html/`
3. Verify that you see `index.html`, `_next` folder, and other files directly in `public_html/`

Option B: **Using FTP (Recommended for Large Projects)**
1. Connect via FTP using your cPanel credentials
2. Navigate to `public_html/`
3. Delete the `arzhomeremodeling.com/` directory
4. Upload all contents from the `out/` folder to `public_html/`

Option C: **Using SSH/Command Line**
```bash
# Connect to your server via SSH
ssh digitalskills@arzhomeremodeling.com

# Navigate to public_html
cd public_html

# Remove old directory
rm -rf arzhomeremodeling.com

# Copy files from local out/ folder (if building locally first)
# Then upload to server, or if building on server:
# Assuming Next.js project is in /home/digitalskills/nextjs-project/
cp -r /path/to/project/out/* /home/digitalskills/public_html/
```

### Step 5: Verify the .htaccess File

Ensure `.htaccess` is in the root of `public_html/` with the following content:

```apache
# Enable Rewrite Engine
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect HTTP to HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Next.js routing - serve index.html for all non-file/non-directory requests
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Disable directory listing
Options -Indexes
```

### Step 6: Test the Deployment

1. Open your browser and navigate to `https://arzhomeremodeling.com/`
2. You should see the homepage loaded (NOT "Index of /")
3. Check the console for any errors (F12 → Console tab)
4. Test navigation to subpages like `/about`, `/services`, etc.

### Step 7: Clear Browser Cache (if needed)

If you see old content:
- Clear your browser cache (Ctrl+Shift+Delete on Windows/Linux, Cmd+Shift+Delete on Mac)
- Try accessing the site in an incognito/private window

## Troubleshooting

### Issue: Still seeing "Index of /" directory listing
- **Cause**: Files are still in a subdirectory
- **Solution**: 
  1. Verify files are directly in `public_html/` (not in a subdirectory)
  2. Ensure `index.html` exists in `public_html/` root
  3. Check that `.htaccess` is present and enabled

### Issue: 404 errors on subpages
- **Cause**: `.htaccess` rewrite rules not working
- **Solution**:
  1. Check `.htaccess` is in `public_html/` root
  2. Ensure `mod_rewrite` is enabled on the server
  3. Contact hosting support if mod_rewrite is disabled

### Issue: Styles/Images not loading
- **Cause**: Incorrect asset paths
- **Solution**:
  1. Check that `_next/` folder is in `public_html/` root
  2. Verify permissions allow reading files (chmod 644 for files, 755 for directories)
  3. Check browser console for specific missing files

### Issue: HTTPS not redirecting properly
- **Cause**: RewriteCond conditions not met
- **Solution**:
  1. Ensure SSL certificate is installed in cPanel
  2. Verify the `.htaccess` HTTPS redirect rules are correct
  3. Check cPanel settings for automatic HTTPS redirect

## Important Notes

1. **Always build before deploying**: `npm run build` must be run to create the `out/` folder
2. **Structure matters**: Files must be in `public_html/` root, not in subdirectories
3. **File permissions**: After uploading, ensure permissions are set correctly (644 for files, 755 for directories)
4. **Cache clearing**: After deploying, clear Cloudflare and browser caches if the site was previously cached

## File Structure After Deployment

Your `public_html/` should look like this:
```
public_html/
├── index.html          ← Main homepage
├── about.html
├── 404.html
├── .htaccess
├── _next/              ← Next.js assets
│   ├── static/
│   └── ...
├── public/
│   └── [public assets]
└── [other HTML files]
```

## Questions or Issues?

If you encounter any problems during deployment:
1. Check the browser console for JavaScript errors
2. Review the cPanel error logs: cPanel → Metrics → Raw Access Logs
3. Contact your hosting provider's support team for assistance with `.htaccess` or server configuration

---

**Last Updated**: April 22, 2026
**Next.js Version**: 16.1.6
**Build Output Directory**: `out/`
