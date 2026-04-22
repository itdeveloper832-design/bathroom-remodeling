@echo off
REM ARZ Home Remodeling - cPanel Deployment Script for Windows
REM This script builds the Next.js project for deployment to cPanel
REM Usage: deploy-cpanel.bat

setlocal enabledelayedexpansion

color 0A
cls

echo ================================
echo ARZ Home Remodeling Deployment
echo ================================
echo.

REM Check if we're in the project root
if not exist "package.json" (
    color 0C
    echo Error: package.json not found
    echo Make sure you run this script from the project root directory
    pause
    exit /b 1
)

echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 (
    color 0C
    echo Error: npm install failed
    pause
    exit /b 1
)

echo.
echo [2/2] Building Next.js project for static export...
call npm run build
if errorlevel 1 (
    color 0C
    echo Error: npm run build failed
    pause
    exit /b 1
)

REM Check if build was successful
if not exist "out" (
    color 0C
    echo Error: Build failed. 'out' directory not created
    pause
    exit /b 1
)

color 0A
echo.
echo ================================
echo Build Successful!
echo ================================
echo.
echo Static files are ready in the 'out' folder
echo.
echo Next steps:
echo 1. Upload contents of 'out' folder to cPanel public_html
echo    (Not to a subdirectory - upload to the ROOT of public_html)
echo 2. Delete any old subdirectories like 'arzhomeremodeling.com'
echo 3. Ensure .htaccess file is in the public_html root
echo 4. Visit https://arzhomeremodeling.com to verify
echo.
echo For detailed instructions, see: CPANEL_DEPLOYMENT_GUIDE.md
echo.
pause
