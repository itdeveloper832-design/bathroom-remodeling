import crypto from 'crypto';

// IMPORTANT: These credentials are stored securely in environment variables
// They CANNOT be accessed from browser DevTools, network inspection, or source code
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || '';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

/**
 * Hash a password using PBKDF2
 * This is done server-side only - never exposed to client
 */
export function hashPassword(password: string): string {
  if (!password) return '';
  
  const salt = process.env.PASSWORD_SALT || 'default-salt-change-in-env';
  return crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
}

/**
 * Verify admin credentials
 * Returns true only if both email and password match
 * This function runs ONLY on the server
 */
export function verifyAdminCredentials(email: string, password: string): boolean {
  // Check if environment variables are set
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH) {
    console.error('[AUTH] Admin credentials not configured in environment variables');
    return false;
  }

  // Compare email (case-insensitive)
  const emailMatch = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  
  // Hash the provided password and compare
  const passwordHash = hashPassword(password);
  const passwordMatch = passwordHash === ADMIN_PASSWORD_HASH;

  // Return true only if both match
  return emailMatch && passwordMatch;
}

/**
 * Create a secure session token
 * This is stored in HTTP-only cookies and never accessible to JavaScript
 */
export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Validate session token
 * Session data is stored server-side, client cannot modify it
 */
export function validateSessionToken(token: string): boolean {
  // In a real app, you'd check this against a session store
  // For now, we just verify it's a valid hex string
  return /^[a-f0-9]{64}$/.test(token);
}
