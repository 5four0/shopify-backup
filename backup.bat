@echo off
cd /d D:\shopify
echo "Current Directory: %CD%"

echo "Running shopify theme pull..."
shopify theme pull --store alunotec.myshopify.com --theme alunotec-new-adjustment
if %errorlevel% neq 0 (
  echo "shopify theme pull failed with error code %errorlevel%"
  exit /b %errorlevel%
)

echo "Checking git status..."
git status

echo "Running git add..."
git add -A
if %errorlevel% neq 0 (
  echo "git add failed with error code %errorlevel%"
  exit /b %errorlevel%
)

echo "Running git commit..."
git commit -m "Daily backup: %date% %time%"
if %errorlevel% neq 0 (
  echo "git commit failed with error code %errorlevel%"
  exit /b %errorlevel%
)

echo "Running git push..."
git push origin master
if %errorlevel% neq 0 (
  echo "git push failed with error code %errorlevel%"
  exit /b %errorlevel%
)

echo "Backup completed successfully"
