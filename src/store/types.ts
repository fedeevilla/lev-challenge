import { IPost } from "../components/PostCard/types";

export interface IPosts {
  isFetching: boolean;
  list: IPost[];
  selected: IPost | null;
}

export interface IRootState {
  posts: IPosts;
}
