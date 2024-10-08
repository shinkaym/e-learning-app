import Heading from '@/components/typography/Heading';
import CourseItem from '@/components/course/CourseItem';
import React from 'react';
import { CourseGrid } from '@/components/common';

const page = () => {
  return (
    <>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  );
};

export default page;
