/* eslint-disable @typescript-eslint/no-unused-vars */
import { getCourseBySlug } from "@/lib/actions/course.action";
import { findAllLessons } from "@/lib/actions/lession.action";
import LessonNavigation from "../LessonNavigation";
import LessonSaveUrl from "../LessonSaveUrl";
import Heading from '@/components/typography/Heading';
import VideoPlayer from './VideoPlayer';
import { getUserInfo } from '@/lib/actions/user.action';
import { auth } from '@clerk/nextjs/server';
const page = async ({
  params,
  searchParams,
}: {
  params: {
    course: string;
  };
  searchParams: {
    slug: string;
  };
}) => {
  const { userId } = auth();
  const findUser = await getUserInfo({ userId: userId! });
  const course = params.course;
  const slug = searchParams.slug;
  const findCourse = await getCourseBySlug({ slug: course });
  if (!findCourse) return null;
  const courseId = findCourse?._id.toString();
  const lessonList = await findAllLessons({ course: courseId || "" });
  const lessonDetails = lessonList?.find((el) => el.slug === slug);
  if (!lessonDetails) return null;
  const currentLessonIndex =
    lessonList?.findIndex((el) => el.slug === slug) || 0;
  const nextLesson = lessonList?.[currentLessonIndex + 1];
  const prevLesson = lessonList?.[currentLessonIndex - 1];
  const videoId = lessonDetails.video_url?.split("v=").at(-1);
  return (
    <div className="mb-5">
      <LessonSaveUrl
        course={course}
        url={`/${course}/lesson?slug=${slug}`}
      ></LessonSaveUrl>
      <VideoPlayer
        nextLesson={
          !nextLesson ? "" : `/${course}/lesson?slug=${nextLesson?.slug}`
        }
        prevLesson={
          !prevLesson ? "" : `/${course}/lesson?slug=${prevLesson?.slug}`
        }
        data={{
          userId: findUser?._id.toString() || "",
          courseId,
        }}
      />
      <Heading className="mb-10">{lessonDetails.title}</Heading>
      <div className="p-5 rounded-lg bgDarkMode border borderDarkMode entry-content">
        <div
          dangerouslySetInnerHTML={{ __html: lessonDetails.content || "" }}
        ></div>
      </div>
    </div>
  );
};
export default page;