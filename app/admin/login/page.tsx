'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/lib/site-config';
import { Loader2, Lock, AlertCircle, ShieldCheck } from 'lucide-react';

/**
 * SECURE ADMIN LOGIN PAGE
 * 
 * Security Features:
 * ✓ Credentials sent only to server (never logged/stored client-side)
 * ✓ HTTP-only session cookies (inaccessible to JavaScript/DevTools)
 * ✓ No sensitive data in localStorage or sessionStorage
 * ✓ Passwords hashed with PBKDF2 on server
 * ✓ HTTPS-only in production
 * ✓ CSRF protection built-in
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Send credentials to secure server endpoint
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Include HTTP-only cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Clear sensitive data from memory
      setEmail('');
      setPassword('');

      // Redirect to dashboard (HTTP-only session cookie is sent automatically)
      router.push('/admin/dashboard');
    } catch (err) {
      console.error('[LOGIN_ERROR]', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">{siteConfig.name}</CardTitle>
          <CardDescription>Secure Admin Dashboard Login</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex gap-2">
              <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-xs text-destructive">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || !email || !password}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className="mt-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs font-medium text-primary">Security Protected</p>
            </div>
            <ul className="text-xs text-muted-foreground space-y-1 ml-6">
              <li>✓ Encrypted transmission</li>
              <li>✓ HTTP-only cookies</li>
              <li>✓ Password never logged</li>
              <li>✓ Server-side validation</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
