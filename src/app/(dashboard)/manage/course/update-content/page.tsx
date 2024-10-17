import CourseUpdateContent from "@/components/course/CourseUpdateContent";
import Heading from '@/components/typography/Heading';
import { getCourseBySlug } from "@/lib/actions/course.action";

const page = async ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  const findCourse = await getCourseBySlug({ slug: searchParams.slug });
  if (!findCourse) return <div>Không tìm thấy khóa học</div>;
  return (
    <>
      <Heading className="mb-10">
        Nội dung: <strong className="text-primary">{findCourse.title}</strong>
      </Heading>
      <CourseUpdateContent
        course={JSON.parse(JSON.stringify(findCourse))}
      ></CourseUpdateContent>
    </>
  );
};
export default page;