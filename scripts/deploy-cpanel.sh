#!/bin/bash

# ARZ Home Remodeling - cPanel Deployment Script
# This script automates the deployment of Next.js static exports to cPanel
# Usage: ./scripts/deploy-cpanel.sh

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}ARZ Home Remodeling Deployment${NC}"
echo -e "${GREEN}================================${NC}\n"

# Configuration
PROJECT_DIR=$(pwd)
OUT_DIR="$PROJECT_DIR/out"
CPANEL_USER="${CPANEL_USER:-digitalskills}"
CPANEL_DOMAIN="${CPANEL_DOMAIN:-arzhomeremodeling.com}"
PUBLIC_HTML="/home/$CPANEL_USER/public_html"
BACKUP_DIR="$PUBLIC_HTML/.backup-$(date +%Y%m%d-%H%M%S)"

# Check if running locally or on server
if [ -z "$1" ]; then
  echo -e "${YELLOW}Usage: $0 <local|server>${NC}"
  echo "  local  - Build and prepare for deployment"
  echo "  server - Deploy to cPanel server (requires SSH access)"
  exit 1
fi

# ============================================
# LOCAL BUILD PHASE
# ============================================
if [ "$1" == "local" ] || [ "$1" == "all" ]; then
  echo -e "${YELLOW}[1/3] Building Next.js project...${NC}"
  
  if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found. Are you in the project root?${NC}"
    exit 1
  fi
  
  echo "Installing dependencies..."
  npm install
  
  echo "Building static export..."
  npm run build
  
  if [ ! -d "$OUT_DIR" ]; then
    echo -e "${RED}Error: Build failed. 'out' directory not created.${NC}"
    exit 1
  fi
  
  echo -e "${GREEN}✓ Build successful!${NC}"
  echo -e "${GREEN}✓ Static files ready in: $OUT_DIR${NC}\n"
  
  # List what will be deployed
  echo -e "${YELLOW}Files to be deployed:${NC}"
  ls -la "$OUT_DIR" | head -20
  echo "..."
  
  if [ "$1" != "all" ]; then
    exit 0
  fi
fi

# ============================================
# SERVER DEPLOYMENT PHASE
# ============================================
if [ "$1" == "server" ] || [ "$1" == "all" ]; then
  echo -e "\n${YELLOW}[2/3] Preparing server deployment...${NC}"
  
  # Check if we can reach the server
  if ! ssh -q "$CPANEL_USER@$CPANEL_DOMAIN" exit 2>/dev/null; then
    echo -e "${RED}Error: Cannot connect to server via SSH${NC}"
    echo "Ensure your SSH key is configured for: $CPANEL_USER@$CPANEL_DOMAIN"
    exit 1
  fi
  
  echo "Connecting to server: $CPANEL_USER@$CPANEL_DOMAIN"
  
  # Create backup of current deployment
  echo -e "${YELLOW}[3/3] Deploying files...${NC}"
  
  ssh "$CPANEL_USER@$CPANEL_DOMAIN" << 'ENDSSH'
# Backup current public_html (excluding the subdirectory we're removing)
echo "Creating backup..."
BACKUP_DIR="/home/$CPANEL_USER/.backup-$(date +%Y%m%d-%H%M%S)"
cp -r /home/$CPANEL_USER/public_html "$BACKUP_DIR"
echo "✓ Backup created at: $BACKUP_DIR"

# Remove old subdirectory if it exists
if [ -d "/home/$CPANEL_USER/public_html/arzhomeremodeling.com" ]; then
  echo "Removing old directory: /home/$CPANEL_USER/public_html/arzhomeremodeling.com"
  rm -rf /home/$CPANEL_USER/public_html/arzhomeremodeling.com
fi

# Clear public_html (except .htaccess and subdirectories we need to keep)
echo "Clearing public_html..."
find /home/$CPANEL_USER/public_html -maxdepth 1 -type f -delete
find /home/$CPANEL_USER/public_html -maxdepth 1 -type d ! -name "public_html" -delete

echo "✓ public_html cleared and ready for new files"
ENDSSH
  
  # Upload files via rsync (faster and more reliable)
  if command -v rsync &> /dev/null; then
    echo "Uploading files with rsync..."
    rsync -avz --delete "$OUT_DIR/" "$CPANEL_USER@$CPANEL_DOMAIN:$PUBLIC_HTML/"
  else
    echo "Uploading files with scp..."
    scp -r "$OUT_DIR"/* "$CPANEL_USER@$CPANEL_DOMAIN:$PUBLIC_HTML/"
  fi
  
  # Set proper permissions
  ssh "$CPANEL_USER@$CPANEL_DOMAIN" << 'ENDSSH'
echo "Setting file permissions..."
find /home/$CPANEL_USER/public_html -type f -exec chmod 644 {} \;
find /home/$CPANEL_USER/public_html -type d -exec chmod 755 {} \;
echo "✓ Permissions set correctly"
ENDSSH
  
  echo -e "${GREEN}✓ Deployment successful!${NC}\n"
  
  echo -e "${YELLOW}Deployment Summary:${NC}"
  echo "Server: $CPANEL_USER@$CPANEL_DOMAIN"
  echo "Destination: $PUBLIC_HTML"
  echo "Backup: $BACKUP_DIR"
  echo ""
  echo -e "${YELLOW}Next steps:${NC}"
  echo "1. Visit https://$CPANEL_DOMAIN/ to verify deployment"
  echo "2. Clear your browser cache if needed"
  echo "3. Check browser console (F12) for any errors"
  echo ""
  echo -e "${GREEN}Deployment complete! ✓${NC}"
fi
