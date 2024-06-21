@echo off
cd /d D:\shopify
shopify theme pull --store alunotec.myshopify.com --theme alunotec-new-adjustment
git add .
git commit -m "Daily backup: %date% %time%"
git push origin master
