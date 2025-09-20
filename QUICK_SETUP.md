# 🚀 Quick Setup Guide for Arise

## Current Error: "Publishable key not valid"

This error occurs because the app needs proper environment configuration. Here's how to fix it:

## 🔧 Step-by-Step Fix

### 1. Database Setup (5 minutes)
1. Download [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. Install with default settings (includes MongoDB Compass)
3. Start MongoDB service: `net start MongoDB`
4. Open MongoDB Compass and connect to `mongodb://localhost:27017`
5. Your app is already configured for this connection!

### 2. Authentication Setup (5 minutes)
1. Go to [Clerk](https://clerk.com)
2. Create a free account
3. Create a new application
4. Go to "API Keys" in your Clerk dashboard
5. Copy:
   - **Publishable Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)
6. Update these in `.env.local`:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_actual_key_here"
   CLERK_SECRET_KEY="sk_test_your_actual_key_here"
   ```

### 3. AI Setup (2 minutes)
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Update `GEMINI_API_KEY` in `.env.local`

### 4. Initialize Database (1 command)
```bash
npx prisma db push
```
This creates all collections in your local MongoDB.

## ✅ Verification

After setup, visit: http://localhost:3000/setup

This page will verify your configuration and guide you if anything is missing.

## 🆘 Quick Test

To test if Clerk is working:
1. Make sure your `.env.local` has real keys (not placeholder values)
2. Restart your development server: `npm run dev`
3. Visit http://localhost:3000
4. Click "Sign In" - you should see the Clerk sign-in form

## 📁 File Structure
```
.env.local          # Your configuration (update this!)
.env.example        # Template with instructions
app/setup/page.jsx  # Environment check page
lib/env-validation.js # Validation utility
```

## 🔍 Common Issues

**"Publishable key not valid"**
- Check that `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` starts with `pk_test_`
- Make sure there are no extra spaces or quotes
- Restart your dev server after changing .env.local

**Database connection errors**
- Start MongoDB service: `net start MongoDB`
- Verify MongoDB Compass can connect to localhost:27017
- Run `npx prisma db push` to create collections

**AI features not working**
- Check `GEMINI_API_KEY` is set and valid
- Verify you have API quota remaining

## 🎯 Next Steps

Once configured:
1. Visit http://localhost:3000
2. Sign up for an account
3. Complete the onboarding process
4. Start using the Arise features!

---

**Need help?** Check the setup page at http://localhost:3000/setup for real-time validation.
