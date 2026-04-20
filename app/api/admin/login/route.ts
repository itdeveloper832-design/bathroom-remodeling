import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminCredentials, generateSessionToken, hashPassword } from '@/lib/auth';

/**
 * POST /api/admin/login
 * 
 * SECURITY NOTES:
 * - This endpoint runs ONLY on the server
 * - Credentials are never exposed to the client/browser
 * - Passwords are hashed with PBKDF2 before comparison
 * - Session tokens are stored in HTTP-only cookies (not accessible to JavaScript)
 * - CSRF protection via Next.js default headers
 * - Rate limiting should be implemented in production
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Verify credentials (server-side only)
    const isValid = verifyAdminCredentials(email, password);

    if (!isValid) {
      // Generic error to prevent email enumeration
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate secure session token
    const sessionToken = generateSessionToken();
    
    // Store session in HTTP-only cookie
    // This cookie is:
    // - HTTP-only (cannot be accessed by JavaScript)
    // - Secure (only sent over HTTPS in production)
    // - SameSite=Strict (prevents CSRF attacks)
    const response = NextResponse.json(
      { success: true, message: 'Login successful' },
      { status: 200 }
    );

    response.cookies.set({
      name: 'admin_session',
      value: sessionToken,
      httpOnly: true, // ✓ Not accessible to JavaScript/DevTools
      secure: process.env.NODE_ENV === 'production', // ✓ HTTPS only in production
      sameSite: 'strict', // ✓ CSRF protection
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    // Also store a flag in a regular cookie to check authentication status (without sensitive data)
    response.cookies.set({
      name: 'is_admin',
      value: 'true',
      httpOnly: false, // Can be read by client to show/hide UI
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
