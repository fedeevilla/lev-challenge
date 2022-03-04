import axios from "axios";

export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_RESOLVED = "FETCH_POSTS_RESOLVED";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED";

export const DELETE_POST_RESOLVED = "DELETE_POST_RESOLVED";
export const DELETE_ALL_POSTS_RESOLVED = "DELETE_ALL_POSTS_RESOLVED";
export const SELECT_POST_RESOLVED = "SELECT_POST_RESOLVED";

const LIMIT = 50;
const SUBREDDIT = "learnjavascript";

export const fetchPosts = () => async (dispatch) => {
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
      payload: children.map(({ data }) => {
        return {
          ...data,
          thumbnail: data.thumbnail === "self" ? null : data.thumbnail,
          created: data.created * 1000,
        };
      }),
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_POSTS_REJECTED,
    });
  }
};

export const deletePost = (idPost) => async (dispatch) => {
  dispatch({
    type: DELETE_POST_RESOLVED,
    payload: idPost,
  });
};

export const selectPost = (idPost) => async (dispatch) => {
  dispatch({
    type: SELECT_POST_RESOLVED,
    payload: idPost,
  });
};

export const dismissAllPosts = () => async (dispatch) => {
  dispatch({
    type: DELETE_ALL_POSTS_RESOLVED,
  });
};
