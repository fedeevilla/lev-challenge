import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";
import Spinner from "./components/Spinner";
import { fetchPosts } from "./store/actions/posts";
import { IRootState } from "./store/types";
import "./styles.scss";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching, selected } = useSelector(
    (state: IRootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isFetching)
    return (
      <div className="spinner-container">
        <Spinner label="Loading..." />
      </div>
    );

  return (
    <div className="app">
      <PostList />
      <div className="post-details">
        {selected ? (
          <PostDetails post={selected} />
        ) : (
          <h2
            className="label-result"
            style={{ color: "red" }}
            data-test="select-post-item"
          >
            Select a post from the list!
          </h2>
        )}
      </div>
    </div>
  );
};

export default App;
