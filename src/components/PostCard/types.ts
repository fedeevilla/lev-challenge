export interface IPost {
  id: string;
  title: string;
  author: string;
  created: number;
  thumbnail: string | null;
  num_comments: number;
  visited: boolean;
  selftext: string;
}
