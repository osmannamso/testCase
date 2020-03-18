import {City} from './city';

export interface User {
  username: string;
  avatar: string;
  description: string;
  city: City;
  isOnline: boolean;

  languages: Array<string>;
  isOfficial: boolean;
  averageReportTime: string;
  recommendationRate: number;
  recommendationCommentRate: number;
  commentCount: number;
}
