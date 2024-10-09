type ActiveLinkProps = {
  url: string;
  children: React.ReactNode;
}

type TMenuItem = {
  url: string
  title: string
  icon: React.ReactNode
}

export type TCreateUserParams = {
  clerkId: string;
  username: string;
  email: string;
  name?: string;
  avatar?: string;
};

export type {
  ActiveLinkProps, TMenuItem
}