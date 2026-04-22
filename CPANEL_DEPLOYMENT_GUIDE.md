# cPanel Deployment Guide for ARZ Home Remodeling

## Status: ✅ PROJECT BUILT AND READY FOR DEPLOYMENT

**Build Date**: April 22, 2026  
**Total Files Ready**: 503  
**Output Directory**: `/out`  
**Next.js Version**: 16.1.6

## Problem
Files are currently in `public_html/arzhomeremodeling.com/` instead of directly in `public_html/`, causing the server to display a directory listing instead of loading the website.

## Solution Summary
The Next.js project has been built and exports static files to the `out/` folder. These files must be deployed to the root of `public_html/`, not in a subdirectory.

## Step-by-Step Deployment Instructions

### Step 1: ✅ Build Complete
The project has already been built successfully:
- Build command: `npm run build`
- Output location: `./out/` folder
- Files generated: 503 files including:
  - `index.html` (homepage)
  - `_next/` folder (assets)
  - `.htaccess` (routing configuration)
  - All page routes and static assets

### Step 2: Download the Built Files

The `out/` folder contains all files ready for deployment. You have two options:

**Option A: Download from Git**
```bash
git clone https://github.com/muhammadimran9/bathroom-remodelings.git
cd bathroom-remodelings
npm run build  # If needed
# The `out/` folder is ready to deploy
```

**Option B: Direct Access**
The built files are in the `/out` directory of the project.

### Step 3: Access cPanel File Manager

1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to `/home/digitalskills/public_html/`

### Step 4: Backup Current Files (IMPORTANT!)

1. Create a backup folder: `/home/digitalskills/public_html-backup-[DATE]/`
2. Or rename the current `public_html` to `public_html-old`
3. This ensures you can rollback if needed

### Step 5: Delete the Old Directory

1. In cPanel, navigate to `/home/digitalskills/public_html/`
2. Right-click on the `arzhomeremodeling.com` folder
3. Select **Delete**
4. Confirm the deletion
5. Delete any other old files/folders (keep only `.htaccess` if it's configured correctly)

### Step 6: Upload Files to public_html Root

**Option A: Using File Manager (Simplest)**
1. In cPanel File Manager, ensure you're in `/public_html/`
2. Upload the entire `out/` folder or its contents using the Upload button
3. Or drag and drop the `out/` folder contents directly
4. Verify that you see `index.html`, `_next` folder, and other files directly in `public_html/`

**Option B: Using FTP (Recommended for Large Projects)**
1. Use FileZilla or any FTP client
2. Connect using your cPanel FTP credentials:
   - Host: `ftp.arzhomeremodeling.com` (or your FTP server)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. Navigate to `public_html/`
4. Upload all contents from the local `out/` folder to `public_html/`
5. Ensure the final structure is: `public_html/index.html`, `public_html/_next/`, etc.

**Option C: Using SSH/Command Line (Advanced)**
```bash
# Connect to your server via SSH
ssh digitalskills@your-server.com

# Navigate to public_html
cd ~/public_html

# Remove old directory
rm -rf arzhomeremodeling.com
rm -rf out  # Remove if exists

# If you have the project cloned on the server:
cd ~/nextjs-project  # Navigate to project folder
npm run build        # Build if not already done
cp -r out/* ~/public_html/

# Or use rsync if files are on local machine:
# rsync -avz --delete out/ digitalskills@your-server.com:~/public_html/
```

### Step 7: Verify the .htaccess File

**IMPORTANT**: The `.htaccess` file is already included in the `out/` folder and will be uploaded automatically. Verify it's present in the root of `public_html/` after upload.

The `.htaccess` file should contain:

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

### Step 8: Set File Permissions (Usually Not Needed)

Most modern hosting handles this automatically, but if you need to set permissions:
```bash
# Via SSH on the server:
cd ~/public_html
find . -type d -exec chmod 755 {} \;  # Folders: 755
find . -type f -exec chmod 644 {} \;  # Files: 644
chmod 644 .htaccess                   # Ensure .htaccess is readable
```

### Step 9: Test the Deployment

1. **Wait 2-5 minutes** for DNS propagation if this is a new domain
2. Open your browser and navigate to `https://arzhomeremodeling.com/`
3. **Expected result**: You should see the homepage loaded (NOT "Index of /")
4. If showing old content, clear your browser cache:
   - **Windows/Linux**: Ctrl+Shift+Delete
   - **Mac**: Cmd+Shift+Delete
5. Try an incognito/private window to bypass cache
6. Check the browser console for any errors (F12 → Console tab)
7. Test navigation by clicking menu items to subpages like `/about`, `/services`, `/contact`

### Step 10: Verify Everything Works

**Quick Checks:**
- [ ] Homepage loads without "Index of /" message
- [ ] No 404 errors in console
- [ ] CSS styling is visible
- [ ] Images are displayed
- [ ] Navigation links work
- [ ] Contact form is functional (if present)
- [ ] Mobile view is responsive
- [ ] HTTPS is active (lock icon in address bar)

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
