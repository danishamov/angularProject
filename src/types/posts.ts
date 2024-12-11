import { Game } from './game';
import { User } from './user';

export interface Post {
  likes: string[];
  comments: string[];
  _id: string;
  text: string;
  userId: User;
  gameId: Game;
  created_at: string;
  updatedAt: string;
  __v: number;
}
