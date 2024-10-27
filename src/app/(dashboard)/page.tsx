import Heading from '@/components/typography/Heading';
import CourseItem from '@/components/course/CourseItem';
import React from 'react';
import { CourseGrid } from '@/components/common';
import { getAllCoursesPublic } from '@/lib/actions/course.action';

const page = async () => {
  const courses = (await getAllCoursesPublic({})) || [];

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
