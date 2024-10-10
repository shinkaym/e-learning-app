import CourseUpdate from '@/components/course/CourseUpdate';
import Heading from '@/components/typography/Heading';
const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  return (
    <>
      <Heading className="mb-8">Cập nhật khóa học</Heading>
      <CourseUpdate />
    </>
  );
};
export default page;