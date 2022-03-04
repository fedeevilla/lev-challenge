import {
  FETCH_POSTS_RESOLVED,
  FETCH_POSTS_STARTED,
  FETCH_POSTS_REJECTED,
} from "../actions/posts";

const initialState = {
  list: [],
  isFetching: false,
};

export const posts = (state = initialState, { type, payload = {} }) => {
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
    default:
      return state;
  }
};
