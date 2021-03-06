import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ErrorBoundary from "./components/ErrorBoundary";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";
import PostList from "./components/PostList";
import Spinner from "./components/Spinner";
import { useSelector } from "./hooks/useSelector";
import { fetchPosts } from "./store/actions/posts";
import "./styles.scss";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching } = useSelector(({ posts }) => posts);

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
    <ErrorBoundary>
      <NavBar />
      <div className="app">
        <PostList />
        <div className="post-details">
          <PostDetails />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
