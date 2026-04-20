# Secure Admin Authentication Setup

This guide explains how to set up your admin credentials securely. Your credentials are **never exposed** to the browser, DevTools, or network inspection.

## Security Features

✅ **HTTP-Only Cookies** - Session tokens stored in secure, HTTP-only cookies that cannot be accessed by JavaScript
✅ **Server-Side Hashing** - Passwords are hashed with PBKDF2-SHA512 before comparison
✅ **HTTPS Only** - Session cookies marked as Secure (HTTPS only in production)
✅ **CSRF Protection** - Built-in protection against cross-site request forgery
✅ **No localStorage** - Credentials never stored in localStorage or sessionStorage
✅ **Encrypted Transmission** - Credentials sent encrypted over HTTPS

## Step 1: Generate Password Hash

Run the password generation script:

```bash
node scripts/generate-admin-password.js
```

The script will prompt you for:
- **Email**: `malanhans777@gmail.com`
- **Password**: Your secure password (will not be displayed)

The script will output:
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `PASSWORD_SALT`

## Step 2: Add to Environment Variables

### For Local Development (.env.local)

Create a `.env.local` file in your project root:

```
ADMIN_EMAIL=malanhans777@gmail.com
ADMIN_PASSWORD_HASH=<paste-the-hash-from-script>
PASSWORD_SALT=<paste-the-salt-from-script>
```

### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:
   - Key: `ADMIN_EMAIL` → Value: `malanhans777@gmail.com`
   - Key: `ADMIN_PASSWORD_HASH` → Value: `<paste-the-hash>`
   - Key: `PASSWORD_SALT` → Value: `<paste-the-salt>`
4. Click "Save"

## Step 3: Login

Navigate to `/admin/login` and enter:
- Email: `malanhans777@gmail.com`
- Password: (the password you set in Step 1)

## What Happens During Login?

1. **Client Side**: Your email and password are sent to the server over HTTPS
2. **Server Side**: 
   - Password is hashed using PBKDF2-SHA512
   - Hashed password is compared against stored hash
   - Session token is generated
3. **Response**: 
   - HTTP-only cookie is set with session token
   - Redirect to admin dashboard
4. **Subsequent Requests**: 
   - Session cookie is automatically sent with each request
   - Cannot be accessed or modified from JavaScript

## Security Notes

⚠️ **CRITICAL**: Never commit `.env.local` or password hashes to git!

```bash
# Add to .gitignore
.env.local
.env.*.local
```

## Admin Dashboard Features

Once logged in, you can:
- ✓ Manage blog posts
- ✓ View contact form submissions
- ✓ Manage leads and testimonials
- ✓ View gallery and services

## Logout

Click the logout button in the admin dashboard. This clears the HTTP-only session cookie.

## Troubleshooting

### "Invalid credentials" error
- Double-check your email and password
- Make sure environment variables are set correctly
- For Vercel, redeploy after adding environment variables

### Password hash doesn't work
- Regenerate the hash using the script
- Ensure `PASSWORD_SALT` matches between generation and env vars

### Still seeing login page after login
- Check browser cookies (DevTools → Storage → Cookies)
- Ensure `admin_session` cookie is present
- Clear browser cache and try again

## Additional Security Tips

1. **Change Password Regularly** - Regenerate hash and update env vars monthly
2. **Use Strong Password** - Minimum 12 characters with mixed case and numbers
3. **Monitor Access** - Check server logs for login attempts
4. **HTTPS Only** - Always use HTTPS in production
5. **Secure Environment** - Never share or expose environment variables

## Questions or Issues?

The admin authentication system uses industry-standard security practices:
- PBKDF2 for password hashing (OWASP recommendation)
- HTTP-only cookies for session management
- Server-side validation for all requests

For additional security hardening, consider:
- Adding rate limiting to `/api/admin/login`
- Implementing 2FA for admin accounts
- Adding IP whitelisting
- Setting up admin activity logging
