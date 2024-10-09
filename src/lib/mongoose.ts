'use server'
/* eslint-disable @typescript-eslint/no-unused-vars */
// singleton connection

import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if(!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not set');
  }

  if (isConnected) {
    console.log('MONGODB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'ucademy'
    })
    isConnected = true
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error while connecting to MongoDB')
  }
}