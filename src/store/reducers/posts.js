import {
  FETCH_POSTS_RESOLVED,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_REJECTED,
} from "../actions/posts";

const initialState = {
  list: [],
  loading: false,
};

export const posts = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_RESOLVED:
      return {
        ...state,
        list: [],
        loading: false,
      };
    case FETCH_POSTS_REJECTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
