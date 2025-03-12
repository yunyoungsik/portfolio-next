import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'test',
    });

    isConnected = true;
  } catch (error) {
    console.error('❌ [ERROR] MongoDB connection failed:', error);
  }
};
