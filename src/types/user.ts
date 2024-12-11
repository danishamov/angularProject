export interface User {
  likes: string[];
  comments: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
  __v: number;
}

export interface UserForAuth {
  // fistNama: string;
  username: string;
  email: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
}
