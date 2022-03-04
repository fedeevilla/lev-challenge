import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./components/PostCard";
import PostDetails from "./components/PostDetails";
import Spinner from "./components/Spinner";
import { dismissAllPosts, fetchPosts } from "./store/actions/posts";
import { IRootState } from "./store/types";
import "./styles.scss";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching, list, selected } = useSelector(
    (state: IRootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDismissAll = () => {
    dispatch(dismissAllPosts());
  };

  if (isFetching)
    return (
      <div className="spinner-container">
        <Spinner label="Loading..." />
      </div>
    );

  return (
    <div className="app">
      <div className="post-list">
        {list.length === 0 ? (
          <h2 className="label-result">No results</h2>
        ) : (
          list.map((post) => <PostCard key={post.id} post={post} />)
        )}
        {list.length > 0 && (
          <button onClick={() => handleDismissAll()}>Dismiss All Posts</button>
        )}
      </div>
      <div className="post-details">
        {selected ? (
          <PostDetails post={selected} />
        ) : (
          <h2 className="label-result">Select a post from the list</h2>
        )}
      </div>
    </div>
  );
};

export default App;
