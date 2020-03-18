import {User} from './user';

export class CommentItem {
  user: User;
  date: string;
  isRecommendation: boolean;
  content: string;
}
