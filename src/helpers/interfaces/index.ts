export interface INews {
  title: string;
  body: string;
  id: string;
}

export interface INewsProps {
  posts: INews[];
  onDelete: (id: string) => void;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
}

export interface IState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
}
