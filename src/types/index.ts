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

export interface IPostCard {
  post: IPost;
}

export interface IPostsState {
  isFetching: boolean;
  list: IPost[];
  selected: IPost | null;
}

export interface IRootState {
  posts: IPostsState;
}

export interface IAction {
  type: string;
  payload?: IPost[] | IPost | string;
}
