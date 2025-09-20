# 🧭 MongoDB Compass Setup Guide

## 📥 Install MongoDB Compass (Free)

### 1. Download & Install MongoDB Community
1. Go to [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Select "Windows" as your platform
3. Download "MongoDB Community Server"
4. Install with default settings (this includes MongoDB Compass)

### 2. Alternative: Install MongoDB Compass Only
1. Go to [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)
2. Download MongoDB Compass for Windows
3. Install the application

## 🚀 Start MongoDB Service

### Option 1: Windows Service (Recommended)
```powershell
# Start MongoDB service
net start MongoDB

# Or using services.msc:
# 1. Press Win + R, type "services.msc"
# 2. Find "MongoDB" service
# 3. Right-click → Start
```

### Option 2: Manual Start
```powershell
# Create data directory if it doesn't exist
mkdir C:\data\db

# Start MongoDB manually
mongod --dbpath C:\data\db
```

## 🔌 Connect with MongoDB Compass

1. Open MongoDB Compass
2. Use this connection string:
   ```
   mongodb://localhost:27017
   ```
3. Click "Connect"
4. You should see your local MongoDB instance

## 🏗️ Your App Configuration

Your `.env.local` is already configured for MongoDB Compass:

```env
# MongoDB Compass Local Connection
DATABASE_URL="mongodb://localhost:27017/career_coach"

# Other environment variables...
```

## ✅ Test the Connection

Run this command to test if your app can connect:

```bash
npx prisma db push
```

This will:
- Connect to your local MongoDB
- Create the database "career_coach"
- Set up all the required collections

## 🎯 Expected Results

After setup, you should see in MongoDB Compass:
- Database: `career_coach`
- Collections: `User`, `Assessment`, `Resume`, `CoverLetter`, `IndustryInsight`

## 🛠️ Troubleshooting

**Connection refused error:**
- Make sure MongoDB service is running
- Check if port 27017 is available
- Restart MongoDB service if needed

**Permission denied:**
- Run PowerShell as Administrator to start MongoDB service
- Check Windows Firewall settings

**Collections not appearing:**
- Run `npx prisma db push` after connecting
- Collections are created when first data is inserted

## 🔄 Quick Commands

```bash
# Check if MongoDB is running
Get-Process mongod

# Start MongoDB service
net start MongoDB

# Stop MongoDB service  
net stop MongoDB

# Test database connection
npx prisma db push

# View database in browser
npx prisma studio
```

## 📊 MongoDB Compass Features

Once connected, you can:
- ✅ View all your app's data in real-time
- ✅ Run queries to inspect data
- ✅ Monitor database performance
- ✅ Create indexes for better performance
- ✅ Import/export data

---

**Your app is now configured for MongoDB Compass! 🎉**
