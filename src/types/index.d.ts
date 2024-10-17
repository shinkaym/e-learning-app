import { ICourse } from '@/database/course.model';

export type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
}

export type TMenuItem = {
  url: string
  title: string
  icon: React.ReactNode
  onlyIcon?: boolean
}

export type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export type TCreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};

export type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
};

export interface TCourseUpdateParams extends Omit<ICourse, "lectures"> {
  _id: string;
  slug: string;
  lectures: ILecture[];
};

// Lecture
export type TCreateLectureParams = {
  course: string;
  title?: string;
  order?: number;
  path?: string;
};
export type TUpdateLectureParams = {
  lectureId: string;
  updateData: {
    title?: string;
    order?: number;
    _destroy?: boolean;
    path?: string;
  };
};
