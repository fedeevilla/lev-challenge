import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissAllPosts, fetchPosts } from "../../store/actions/posts";
import { IRootState } from "../../store/types";
import PostCard from "../PostCard";
import Button from "../Button";
import "./styles.scss";

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
        <div className="label-container">
          <h2 className="label-result" data-test="no-results-label">
            No results
          </h2>
          <Button onClick={() => dispatch(fetchPosts())}>Load TOP posts</Button>
        </div>
      ) : (
        renderedList.map((post) => <PostCard key={post.id} post={post} />)
      )}
      {list.length > 0 && (
        <div className="footer-buttons">
          <Button onClick={() => handleDismissAll()} styleType="danger">
            Dismiss All Posts
          </Button>
          {countPosts < list.length && (
            <Button onClick={() => handleShowMore()}>Show More Posts</Button>
          )}
        </div>
      )}
    </div>
  );
};

export default PostList;
