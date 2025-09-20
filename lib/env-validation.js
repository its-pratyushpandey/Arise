// Environment validation utility
export function validateEnvironment() {
  const requiredEnvVars = {
    'DATABASE_URL': process.env.DATABASE_URL,
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY': process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    'CLERK_SECRET_KEY': process.env.CLERK_SECRET_KEY,
    'GEMINI_API_KEY': process.env.GEMINI_API_KEY,
  };

  const missing = [];
  const placeholder = [];

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      missing.push(key);
    } else if (value.includes('placeholder') || value.includes('your_') || value.includes('_here')) {
      placeholder.push(key);
    }
  }

  return {
    isValid: missing.length === 0 && placeholder.length === 0,
    missing,
    placeholder,
    getMessage: () => {
      if (missing.length > 0) {
        return `Missing environment variables: ${missing.join(', ')}`;
      }
      if (placeholder.length > 0) {
        return `Please update placeholder values for: ${placeholder.join(', ')}`;
      }
      return 'Environment configuration is valid';
    }
  };
}

export function getSetupInstructions() {
  return {
    database: "1. Install and start MongoDB locally, or use MongoDB Compass to connect to localhost:27017",
    clerk: "2. Go to https://clerk.com and create a free account, then create an app to get your keys",
    gemini: "3. Go to https://aistudio.google.com/app/apikey and create a free API key",
    config: "4. Update the .env.local file with your actual keys (not the placeholder values)"
  };
}
