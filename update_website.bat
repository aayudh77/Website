@echo off
REM -- Go to your website folder
cd /d C:\Users\ACER\Desktop\Website

REM -- Stage all changes
git add .

REM -- Commit changes with timestamp
set TIMESTAMP=%date%_%time%
git commit -m "Auto-update %TIMESTAMP%"

REM -- Push to GitHub
git push origin main

echo.
echo Website pushed successfully!
pause
