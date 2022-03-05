import axios from "axios";
import { IPost } from "../../components/PostCard/types";
import { IRootState } from "../types";

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
  try {
    const localPosts = localStorage.getItem("posts");
    const postList = (localPosts ? JSON.parse(localPosts) : []) as IPost[];

    if (postList.length === 0) {
      const {
        data: {
          data: { children },
        },
      } = await axios.get(
        `https://www.reddit.com/r/${SUBREDDIT}/top.json?limit=${LIMIT}`
      );

      const result: IPost[] = children.map(({ data }: { data: IPost }) => ({
        ...data,
        thumbnail: data.thumbnail === "self" ? null : data.thumbnail,
        created: data.created * 1000,
      }));

      dispatch({
        type: FETCH_POSTS_RESOLVED,
        payload: result,
      });
      localStorage.setItem("posts", JSON.stringify(result));
    } else {
      dispatch({
        type: FETCH_POSTS_RESOLVED,
        payload: postList,
      });
      localStorage.setItem("posts", JSON.stringify(postList));
    }
  } catch (e) {
    console.error(e);
    dispatch({
      type: FETCH_POSTS_REJECTED,
    });
  }
};

export const deletePost =
  (idPost: string) => async (dispatch: any, getState: any) => {
    dispatch({
      type: DELETE_POST_RESOLVED,
      payload: idPost,
    });

    const { posts } = getState();
    localStorage.setItem("posts", JSON.stringify(posts.list));
    localStorage.setItem("selected", JSON.stringify(posts.selected));
  };

export const selectPost =
  (idPost: string) => async (dispatch: any, getState: any) => {
    dispatch({
      type: SELECT_POST_RESOLVED,
      payload: idPost,
    });

    const { posts }: IRootState = getState();
    localStorage.setItem("posts", JSON.stringify(posts.list));
    localStorage.setItem("selected", JSON.stringify(posts.selected));
  };

export const dismissAllPosts = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: DELETE_ALL_POSTS_RESOLVED,
  });
  const { posts } = getState();
  localStorage.setItem("posts", JSON.stringify(posts.list));
  localStorage.setItem("selected", JSON.stringify(posts.selected));
};
