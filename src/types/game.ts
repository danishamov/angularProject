import { Post } from './posts';
import { User } from './user';

export interface Game {
  likes: string[];
  comments: Post[];
  title: string;
  category: string;
  maxLevel: number;
  imageUrl: string;
  summary: string;
  _id: string;
  userId: User;
  __v: number;
}
