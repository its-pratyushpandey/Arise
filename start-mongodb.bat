@echo off
echo 🚀 Starting MongoDB for your Arise App...
echo.

REM Check if MongoDB service exists
sc query MongoDB >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ MongoDB service found. Starting...
    net start MongoDB
    if %errorlevel% equ 0 (
        echo ✅ MongoDB started successfully!
        echo 🧭 You can now open MongoDB Compass and connect to:
        echo    mongodb://localhost:27017
        echo.
        echo 🎯 Next steps:
        echo    1. Open MongoDB Compass
        echo    2. Connect to localhost:27017
        echo    3. Run: npm run setup-db
        echo    4. Start your app: npm run dev
    ) else (
        echo ❌ Failed to start MongoDB service.
        echo 🔧 Try running this script as Administrator.
    )
) else (
    echo ❌ MongoDB service not found.
    echo 📥 Please install MongoDB Community Server:
    echo    https://www.mongodb.com/try/download/community
    echo.
    echo 🏗️ After installation:
    echo    1. Restart this script
    echo    2. MongoDB will start automatically
)

echo.
pause
