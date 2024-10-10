"use server"

import User, { IUser } from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import { TCreateUserParams } from '@/types';

export async function createUser(params: TCreateUserParams) {
  try {
    connectToDatabase();
    const user = await User.create(params);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo({
  userId,
}: {
  userId: string;
}): Promise<IUser | null | undefined> {
  try {
    connectToDatabase();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log(error);
  }
}