export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_RESOLVED = "FETCH_POSTS_RESOLVED";
export const FETCH_POSTS_REJECTED = "FETCH_POSTS_REJECTED";

export const fetchPosts = () => async (dispatch) => {
  dispatch({
    type: FETCH_POSTS_STARTED,
  });
  try {
    dispatch({
      type: FETCH_POSTS_RESOLVED,
      payload: {},
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_POSTS_REJECTED,
    });
  }
};
