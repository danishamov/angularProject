export interface User {
  // likes: string[];
  comments: string[];
  email: string;
  // username: string;
  password: string;
  _createdOn: string;
  _id: string;
  accessToken: string;
  __v: number;
}

export interface UserForAuth {
  // fistNama: string;
  // username: string;
  email: string;
  password: string;
  _createdOn: string;
  _id: string;
  accessToken: string;
}

// export interface ProfileDetails {
//   username: string;
//   email: string;
// }
