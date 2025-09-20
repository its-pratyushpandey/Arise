# 🚨 URGENT: Real API Keys Required

Your app is failing because it needs **REAL** API keys, not placeholders.

## 🔑 Get Real API Keys (5 minutes):

### 1. Clerk Authentication (FREE)
1. Go to https://clerk.com
2. Sign up for free account
3. Create new application
4. Copy these keys to .env.local:
   - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (starts with pk_test_)
   - CLERK_SECRET_KEY (starts with sk_test_)

### 2. Google Gemini AI (FREE)
1. Go to https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Create new API key
4. Copy to .env.local as GEMINI_API_KEY

### 3. MongoDB Database (FREE)
1. Go to https://cloud.mongodb.com
2. Create free cluster
3. Get connection string
4. Replace DATABASE_URL in .env.local

## 🏃‍♂️ Quick Fix (Use this for immediate testing):

Replace your .env.local with these working development values:

```env
# MongoDB Local (for testing)
DATABASE_URL="mongodb://localhost:27017/career_coach"

# Clerk Test Keys (replace with real ones)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_dGVzdGluZy1zdHJhdGVneS00OS5jbGVyay5hY2NvdW50cy5kZXYk"
CLERK_SECRET_KEY="sk_test_ReplaceWithYourRealSecretKey123456789"

# URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Gemini AI (replace with real key)
GEMINI_API_KEY="AIzaSyReplaceWithYourRealGeminiAPIKey123456789"

NODE_ENV=development
```

## ⚡ After getting real keys:
1. Replace placeholder values in .env.local
2. Restart your dev server: `npm run dev`
3. Your app will work perfectly!

---
**The app will NOT work with placeholder keys. Get real ones for full functionality.**
