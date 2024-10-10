import Heading from '@/components/typography/Heading'
import CourseAddNew from '@/components/course/CourseAddNew'
import React from 'react'

const page = () => {
  return (
    <div>
      <Heading>Tạo khoá học mới</Heading>
      <CourseAddNew></CourseAddNew>
    </div>
  )
}

export default page