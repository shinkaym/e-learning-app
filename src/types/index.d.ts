import { ICourse } from '@/database/course.model';

type TActiveLinkProps = {
  url: string;
  children: React.ReactNode;
}

type TMenuItem = {
  url: string
  title: string
  icon: React.ReactNode
  onlyIcon?: boolean
}

type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

type TCreateCourseParams = {
  title: string;
  slug: string;
  author: string;
};

type TUpdateCourseParams = {
  slug: string;
  updateData: Partial<ICourse>;
  path?: string;
};

export type {
  TActiveLinkProps, TMenuItem, TCreateUserParams, TCreateCourseParams, TUpdateCourseParams
}