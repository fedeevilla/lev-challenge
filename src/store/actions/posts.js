import axios from "axios";

export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_RESOLVED = "FETCH_POSTS_RESOLVED";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED";

const LIMIT = 50;

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS_STARTED,
  });

  const {
    data: {
      data: { children },
    },
  } = await axios.get(
    `https://www.reddit.com/r/learnjavascript.json?limit=${LIMIT}`
  );

  try {
    dispatch({
      type: FETCH_POSTS_RESOLVED,
      payload: children.map(({ data }) => data),
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_POSTS_REJECTED,
    });
  }
};
