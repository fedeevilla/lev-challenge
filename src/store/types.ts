import { IPost } from "../components/PostCard/types";

export interface IPosts {
  isFetching: boolean;
  list: IPost[];
}

export interface IRootState {
  posts: IPosts;
}
