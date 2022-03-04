import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./components/PostCard";
import { fetchPosts } from "./store/actions/posts";
import { IRootState } from "./store/types";
import "./styles.css";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching, list, selected } = useSelector(
    (state: IRootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div className="app">
      <div className="post-list">
        {list.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="post-details">{JSON.stringify(selected)}</div>
    </div>
  );
};

export default App;
