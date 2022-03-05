import axios from "axios";
import { IPost } from "../../components/PostCard/types";

export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_RESOLVED = "FETCH_POSTS_RESOLVED";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED";

export const DELETE_POST_RESOLVED = "DELETE_POST_RESOLVED";
export const DELETE_ALL_POSTS_RESOLVED = "DELETE_ALL_POSTS_RESOLVED";
export const SELECT_POST_RESOLVED = "SELECT_POST_RESOLVED";

const LIMIT = 50;
const SUBREDDIT = "learnjavascript";

export const fetchPosts = () => async (dispatch: any) => {
  dispatch({
    type: FETCH_POSTS_STARTED,
  });

  const {
    data: {
      data: { children },
    },
  } = await axios.get(
    `https://www.reddit.com/r/${SUBREDDIT}/top.json?limit=${LIMIT}`
  );

  try {
    dispatch({
      type: FETCH_POSTS_RESOLVED,
      payload: children.map(({ data }: { data: IPost }) => ({
        ...data,
        thumbnail: data.thumbnail === "self" ? null : data.thumbnail,
        created: data.created * 1000,
      })),
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_POSTS_REJECTED,
    });
  }
};

export const deletePost = (idPost: string) => async (dispatch: any) => {
  dispatch({
    type: DELETE_POST_RESOLVED,
    payload: idPost,
  });
};

export const selectPost = (idPost: string) => async (dispatch: any) => {
  dispatch({
    type: SELECT_POST_RESOLVED,
    payload: idPost,
  });
};

export const dismissAllPosts = () => async (dispatch: any) => {
  dispatch({
    type: DELETE_ALL_POSTS_RESOLVED,
  });
};
