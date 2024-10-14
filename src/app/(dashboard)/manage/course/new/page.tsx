import Heading from '@/components/typography/Heading'
import CourseAddNew from '@/components/course/CourseAddNew'
import React from 'react'
import { getUserInfo } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const mongoUser = await getUserInfo({ userId });
  if (!mongoUser) return null;

  return (
    <div>
      <Heading>Tạo khoá học mới</Heading>
      <CourseAddNew user={JSON.parse(JSON.stringify(mongoUser))}></CourseAddNew>
    </div>
  )
}

export default page