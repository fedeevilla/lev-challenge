import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./components/PostCard";
import { fetchPosts } from "./store/actions/posts";
import { IRootState } from "./store/types";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isFetching, list } = useSelector((state: IRootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isFetching) return <h1>Loading...</h1>;

  return (
    <div>
      {list.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
