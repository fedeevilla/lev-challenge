import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";
import Spinner from "./components/Spinner";
import { useSelector } from "./hooks/useSelector";
import { fetchPosts } from "./store/actions/posts";

import "./styles.scss";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching, selected } = useSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isFetching) {
    return (
      <div className="spinner-container">
        <Spinner label="Loading..." />
      </div>
    );
  }

  return (
    <div className="app">
      <PostList />
      <div className="post-details">
        {selected ? (
          <PostDetails post={selected} />
        ) : (
          <h2
            className="label-result"
            data-test="select-post-item"
            style={{ color: "red" }}
          >
            Select a post from the list!
          </h2>
        )}
      </div>
    </div>
  );
};

export default App;
