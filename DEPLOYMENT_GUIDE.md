# 🚀 DEPLOYMENT GUIDE - ARZ Home Remodeling

**Domain:** https://arzhomeremodeling.com  
**Hosting:** cPanel (Shared Hosting)  
**Deployment Method:** GitHub Actions + FTP  
**Status:** Ready for Deployment

---

## 📋 DEPLOYMENT OVERVIEW

This guide explains how to deploy the Next.js website to your cPanel hosting at `/home/digitalskills/arzhomeremodeling.com/`.

### Key Points
- ✅ Website builds to standalone output
- ✅ GitHub Actions automates deployment
- ✅ FTP uploads to cPanel directory
- ✅ No public_html conflicts
- ✅ Production-ready configuration

---

## 🔧 SETUP REQUIREMENTS

### 1. GitHub Secrets Configuration
Add these secrets to your GitHub repository:

**Settings → Secrets and variables → Actions**

```
FTP_SERVER: your-ftp-server.com
FTP_USERNAME: your-cpanel-username
FTP_PASSWORD: your-cpanel-password
```

### 2. cPanel Configuration
- **FTP Access:** Enabled
- **Directory:** `/home/digitalskills/arzhomeremodeling.com/`
- **Node.js:** Version 18+ installed
- **npm/pnpm:** Available on server

---

## 📦 BUILD CONFIGURATION

### Next.js Output
The website is configured to build as **standalone** output:

```javascript
// next.config.js
output: 'standalone'
```

This creates:
- `.next/standalone/` - Complete application
- `.next/static/` - Static assets
- `public/` - Public files

### Build Process
```bash
# Install dependencies
pnpm install

# Build for production
pnpm run build

# Output location
.next/standalone/
```

---

## 🔄 GITHUB ACTIONS WORKFLOW

### Automatic Deployment
File: `.github/workflows/deploy.yml`

**Triggers on:**
- Push to `main` branch
- Automatically builds and deploys

**Workflow Steps:**
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Build Next.js
5. Deploy via FTP to cPanel

### Manual Deployment
If needed, you can manually trigger:
1. Go to GitHub repository
2. Actions tab
3. Select "Deploy to cPanel"
4. Click "Run workflow"

---

## 📁 DIRECTORY STRUCTURE

### On cPanel Server
```
/home/digitalskills/arzhomeremodeling.com/
├── .next/
│   ├── standalone/          # Main application
│   ├── static/              # Static assets
│   └── cache/               # Build cache
├── public/                  # Public files
├── node_modules/            # Dependencies
├── package.json
└── ...other files
```

### Important
- **Do NOT delete** `.next/standalone/` directory
- **Do NOT modify** deployment files manually
- **Always push** changes to GitHub for deployment

---

## 🌐 DOMAIN CONFIGURATION

### DNS Settings
Point your domain to cPanel:
```
A Record: your-server-ip
CNAME: www → arzhomeremodeling.com
```

### SSL Certificate
- Enable AutoSSL in cPanel
- Or manually install SSL certificate
- Ensure HTTPS is enforced

### .htaccess Configuration
Create `.htaccess` in `/home/digitalskills/arzhomeremodeling.com/`:

```apache
# Redirect HTTP to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Next.js routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🚀 DEPLOYMENT STEPS

### Step 1: Prepare GitHub Repository
```bash
# Clone repository
git clone https://github.com/your-username/arzhomeremodeling.git
cd arzhomeremodeling

# Create main branch if needed
git checkout -b main
```

### Step 2: Add GitHub Secrets
1. Go to GitHub repository settings
2. Secrets and variables → Actions
3. Add FTP credentials:
   - `FTP_SERVER`
   - `FTP_USERNAME`
   - `FTP_PASSWORD`

### Step 3: Push to GitHub
```bash
# Make changes
git add .
git commit -m "Initial deployment setup"
git push origin main
```

### Step 4: Monitor Deployment
1. Go to GitHub Actions tab
2. Watch "Deploy to cPanel" workflow
3. Check deployment logs
4. Verify website is live

### Step 5: Verify Website
- Visit https://arzhomeremodeling.com
- Check all pages load correctly
- Verify SSL certificate
- Test contact forms

---

## 🔍 TROUBLESHOOTING

### Issue: "Cannot find module"
**Solution:** Ensure all dependencies are installed
```bash
pnpm install
pnpm run build
```

### Issue: "FTP connection failed"
**Solution:** Verify FTP credentials
- Check FTP_SERVER, FTP_USERNAME, FTP_PASSWORD
- Ensure FTP is enabled in cPanel
- Check firewall settings

### Issue: "Website shows 404"
**Solution:** Check .htaccess configuration
- Verify rewrite rules are correct
- Check directory permissions (755)
- Ensure index.html exists

### Issue: "Slow page loads"
**Solution:** Optimize cPanel resources
- Check Node.js version (18+)
- Verify memory allocation
- Enable gzip compression
- Clear browser cache

---

## 📊 MONITORING & MAINTENANCE

### Regular Checks
- Monitor website uptime
- Check error logs in cPanel
- Review Google Search Console
- Monitor page speed

### Update Process
1. Make code changes locally
2. Test thoroughly
3. Push to GitHub main branch
4. GitHub Actions automatically deploys
5. Verify changes on live site

### Backup Strategy
- GitHub repository is your backup
- cPanel automatic backups
- Regular code commits

---

## 🔐 SECURITY BEST PRACTICES

### Environment Variables
Create `.env.local` on cPanel:
```env
NEXT_PUBLIC_SITE_URL=https://arzhomeremodeling.com
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
# ... other variables
```

### File Permissions
```bash
# Set correct permissions
chmod 755 /home/digitalskills/arzhomeremodeling.com/
chmod 644 /home/digitalskills/arzhomeremodeling.com/.htaccess
```

### SSL Certificate
- Always use HTTPS
- Enable HSTS headers
- Keep certificate updated

---

## 📞 SUPPORT & HELP

### Common Commands
```bash
# Local development
pnpm run dev

# Production build
pnpm run build

# Start production server
pnpm run start

# Check build size
pnpm run build --analyze
```

### Useful Links
- [Next.js Documentation](https://nextjs.org/docs)
- [cPanel Documentation](https://docs.cpanel.net)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## ✅ DEPLOYMENT CHECKLIST

Before deploying, ensure:
- [ ] All code is committed to GitHub
- [ ] GitHub secrets are configured
- [ ] `.env.local` is set on cPanel
- [ ] SSL certificate is installed
- [ ] Domain DNS is configured
- [ ] .htaccess is in place
- [ ] Node.js 18+ is installed
- [ ] FTP access is enabled
- [ ] Backup is created
- [ ] Website loads correctly

---

## 🎉 DEPLOYMENT COMPLETE

Your website is now deployed and ready for production!

**Next Steps:**
1. Monitor website performance
2. Set up Google Analytics
3. Submit sitemap to Google Search Console
4. Configure email notifications
5. Set up regular backups

---

**Last Updated:** 2024  
**Version:** 1.0  
**Status:** ✅ READY FOR DEPLOYMENT

For questions or issues, refer to the troubleshooting section or contact your hosting provider.
