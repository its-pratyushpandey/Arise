# Arise - Setup Guide

## 🚀 Current Status
✅ Dependencies installed  
✅ Development server running at http://localhost:3000  
⚠️ Environment variables need configuration  

## 📋 Required Setup Steps

### 1. Database Setup (MongoDB Compass - Local)
1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community) (includes Compass)
2. Start MongoDB service: `net start MongoDB`
3. Open MongoDB Compass and connect to `mongodb://localhost:27017`
4. Your app is pre-configured to connect to this local database
5. **Note**: No additional configuration needed - works out of the box!

### 2. Authentication Setup (Clerk)
1. Go to [Clerk](https://clerk.com) and create a free account
2. Create a new application
3. Copy the publishable key and secret key
4. Update `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` in `.env.local`

### 3. AI Setup (Google Gemini)
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Update `GEMINI_API_KEY` in `.env.local`

### 4. Database Initialization
With MongoDB Compass connected, initialize your database:
```bash
npx prisma db push
```
This creates all necessary collections in your local MongoDB.

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run database migrations
npx prisma db push

# Open Prisma Studio (database viewer)
npx prisma studio

# Generate Prisma client
npx prisma generate
```

## 🌟 Features

- **User Authentication** - Secure login/signup with Clerk
- **Onboarding** - Industry and skills profiling
- **Resume Builder** - Create and improve resumes with AI
- **Cover Letter Generator** - AI-powered cover letters
- **Mock Interviews** - Practice with AI-generated questions
- **Industry Insights** - Salary data and market trends
- **Dashboard** - Personalized career recommendations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: MongoDB (Atlas)
- **Authentication**: Clerk
- **AI**: Google Gemini
- **Background Jobs**: Inngest

## 📱 App Structure

```
app/
├── (auth)/          # Authentication pages
├── (main)/          # Protected app pages
│   ├── dashboard/   # Main dashboard
│   ├── resume/      # Resume builder
│   ├── ai-cover-letter/ # Cover letter generator
│   ├── interview/   # Mock interviews
│   └── onboarding/  # User setup
├── api/             # API endpoints
└── lib/             # Utilities and schemas
```

## 🔐 Environment Variables

Create `.env.local` with these variables:

```env
DATABASE_URL="mongodb://localhost:27017/career_coach"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
GEMINI_API_KEY="..."
```

## 🚨 Troubleshooting

### Database Connection Issues
- Ensure MongoDB service is running: `net start MongoDB`
- Check if MongoDB Compass can connect to localhost:27017
- Run `npx prisma db push` to initialize collections

### Authentication Issues
- Verify Clerk keys are correct
- Check Clerk dashboard for domain settings

### AI Features Not Working
- Verify Gemini API key is valid
- Check API quota limits

## 📖 Next Steps

1. Configure all environment variables
2. Run database migrations
3. Access the app at http://localhost:3000
4. Complete user onboarding
5. Start building your career profile!
