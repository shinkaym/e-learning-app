/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectToDB } from '@/lib/mongoose';

export default async function Home() {
  const connect = connectToDB()
  // console.log('🚀 ~ Home ~ connect:', connect)
  return (
    <div>HomePage</div>
  );
}
