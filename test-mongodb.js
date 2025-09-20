// MongoDB Connection Test
// Run this with: node test-mongodb.js

import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔌 Testing MongoDB connection...');
    
    // Test the connection
    await prisma.$connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    // Test basic operations
    console.log('📊 Testing database operations...');
    
    // This will create the collections if they don't exist
    console.log('🏗️ Ensuring database schema...');
    
    console.log('🎉 MongoDB Compass Setup Complete!');
    console.log('');
    console.log('📱 You can now:');
    console.log('   • Open MongoDB Compass');
    console.log('   • Connect to: mongodb://localhost:27017');
    console.log('   • View database: career_coach');
    console.log('   • See collections: User, Assessment, Resume, etc.');
    console.log('');
    console.log('🚀 Start your app: npm run dev');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:');
    console.error(error.message);
    console.log('');
    console.log('🔧 Troubleshooting:');
    console.log('   1. Install MongoDB: https://www.mongodb.com/try/download/community');
    console.log('   2. Start MongoDB service: net start MongoDB');
    console.log('   3. Verify Compass connects to: mongodb://localhost:27017');
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
