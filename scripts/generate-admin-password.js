#!/usr/bin/env node

/**
 * ADMIN PASSWORD HASH GENERATOR
 * 
 * This script generates a secure password hash for the admin login.
 * It uses PBKDF2 with SHA-512, the same algorithm used during login verification.
 * 
 * USAGE:
 *   node scripts/generate-admin-password.js
 * 
 * Then copy the output hash and add it to your .env.local file:
 *   ADMIN_EMAIL=malanhans777@gmail.com
 *   ADMIN_PASSWORD_HASH=<paste-the-hash-here>
 *   PASSWORD_SALT=<paste-the-salt-here>
 */

const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function hashPassword(password, salt) {
  return crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
}

rl.question('Enter admin email: ', (email) => {
  rl.question('Enter admin password (will not be displayed): ', (password) => {
    rl.close();

    if (!email || !password) {
      console.error('❌ Email and password are required');
      process.exit(1);
    }

    // Generate a random salt (or use a consistent one)
    const salt = process.env.PASSWORD_SALT || crypto.randomBytes(16).toString('hex');
    
    // Hash the password
    const passwordHash = hashPassword(password, salt);

    console.log('\n✅ Admin Setup Complete!\n');
    console.log('Add these values to your .env.local file:\n');
    console.log(`ADMIN_EMAIL=${email}`);
    console.log(`ADMIN_PASSWORD_HASH=${passwordHash}`);
    console.log(`PASSWORD_SALT=${salt}`);
    console.log('\n📝 Save these in a secure location and never commit them to git!');
    console.log('🔐 These credentials will NOT be visible in browser DevTools or network requests.\n');
  });
});
