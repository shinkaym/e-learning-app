type ActiveLinkProps = {
  url: string;
  children: React.ReactNode;
}

type TMenuItem = {
  url: string
  title: string
  icon: React.ReactNode
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
  // author: string;
};

export type {
  ActiveLinkProps, TMenuItem, TCreateUserParams, TCreateCourseParams
}