import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissAllPosts } from "../../store/actions/posts";
import { IRootState } from "../../store/types";
import PostCard from "../PostCard";

const PER_PAGE = 10;

const PostList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: IRootState) => state.posts);
  const [countPosts, setCountPost] = useState(PER_PAGE);

  const handleDismissAll = () => {
    dispatch(dismissAllPosts());
  };

  const handleShowMore = () => {
    setCountPost((countPosts) => countPosts + PER_PAGE);
  };

  const renderedList = list.slice(0, countPosts);

  return (
    <div className="post-list">
      {list.length === 0 ? (
        <h2 className="label-result">No results</h2>
      ) : (
        renderedList.map((post) => <PostCard key={post.id} post={post} />)
      )}
      {list.length > 0 && (
        <div>
          <button onClick={() => handleDismissAll()}>Dismiss All Posts</button>
          {countPosts < list.length && (
            <button onClick={() => handleShowMore()}>Show More Posts</button>
          )}
        </div>
      )}
    </div>
  );
};

export default PostList;
