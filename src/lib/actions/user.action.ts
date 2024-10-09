import User from '@/database/user.model';
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