import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import { dismissAllPosts, fetchPosts } from "../../store/actions/posts";
import PostCard from "../PostCard";
import Button from "../Button";
import "./styles.scss";
import { useSelector } from "../../hooks/useSelector";

const PER_PAGE = 10;

const PostList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { list } = useSelector(({ posts }) => posts);
  const [countPosts, setCountPost] = useState<number>(PER_PAGE);

  const handleDismissAll = () => {
    dispatch(dismissAllPosts());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowMore = () => {
    setCountPost((countPosts) => countPosts + PER_PAGE);
  };

  const renderedList = list.slice(0, countPosts);

  const LoadTopButton = () => (
    <Button
      ariaLabel="Load TOP posts"
      styleType="success"
      onClick={() => dispatch(fetchPosts(true))}
    >
      Load TOP posts
    </Button>
  );

  return (
    <div className="post-list">
      {list.length === 0 ? (
        <div className="label-container">
          <h2 className="label-result" data-test="no-results-label">
            No results
          </h2>
          <LoadTopButton />
        </div>
      ) : (
        <>
          <AnimatePresence>
            {renderedList.map((post) => (
              <motion.div
                key={post.id}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="footer-buttons">
            <Button
              ariaLabel="Dismiss All Posts"
              styleType="danger"
              onClick={handleDismissAll}
            >
              Dismiss All Posts
            </Button>
            {countPosts < list.length && (
              <Button ariaLabel="Show More Posts" onClick={handleShowMore}>
                Show More Posts
              </Button>
            )}
            <LoadTopButton />
          </div>
        </>
      )}
    </div>
  );
};

export default PostList;
