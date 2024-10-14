import Heading from '@/components/typography/Heading';
import CourseItem from '@/components/course/CourseItem';
import React from 'react';
import { CourseGrid } from '@/components/common';
import { getAllCourses } from '@/lib/actions/course.action';

const page = async () => {
  const courses = (await getAllCourses()) || [];

  return (
    <>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        {courses.length > 0 && courses?.map((item) => <CourseItem key={item.slug} data={item}></CourseItem>)}
      </CourseGrid>
    </>
  );
};

export default page;
