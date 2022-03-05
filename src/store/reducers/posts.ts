import { IAction, IPostsState } from "../../types";
import {
  FETCH_POSTS_RESOLVED,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_REJECTED,
  DELETE_POST_RESOLVED,
  SELECT_POST_RESOLVED,
  DELETE_ALL_POSTS_RESOLVED,
} from "../actions/posts";

const initialState: IPostsState = {
  list: [],
  isFetching: false,
  selected: null,
};

export const posts = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POSTS_RESOLVED:
      return {
        ...state,
        list: payload,
        isFetching: false,
      };
    case FETCH_POSTS_REJECTED:
      return {
        ...state,
        isFetching: false,
      };
    case DELETE_POST_RESOLVED:
      return {
        ...state,
        list: state.list.filter((post) => post.id !== payload),
        selected: state.selected?.id === payload ? null : state.selected,
      };
    case SELECT_POST_RESOLVED:
      return {
        ...state,
        list: state.list.map((post) => {
          if (post.id === payload) return { ...post, visited: true };

          return post;
        }),
        selected: state.list.find((post) => post.id === payload),
      };
    case DELETE_ALL_POSTS_RESOLVED:
      return initialState;
    default:
      return state;
  }
};
