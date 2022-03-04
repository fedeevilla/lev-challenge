import { IPost } from "../components/PostCard/types";

export interface IPosts {
  isFetching: boolean;
  list: IPost[];
  selected: IPost;
}

export interface IRootState {
  posts: IPosts;
}
