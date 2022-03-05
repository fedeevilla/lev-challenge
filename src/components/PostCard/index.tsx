import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModalImage from "../ModalImage";
import { IPostCard } from "../../types";
import Button from "../Button";
import { deletePost, selectPost } from "../../store/actions/posts";
import "./styles.scss";

const PostCard = ({ post }: IPostCard): JSX.Element => {
  const dispatch = useDispatch();
  const [showModal, setsShowModal] = useState<boolean>(false);

  const handleSelect = () => {
    dispatch(selectPost(post.id));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <>
      <div className="post-card-container" data-test="post-card-item">
        <div className="post-card-header">
          <div>
            <span className="post-card-author">{post.author}</span>
            <span className="post-card-date">
              ({moment(moment(post.created), "YYYYMMDD").fromNow()})
            </span>
            {!post.visited && <span className="post-card-seen">New!</span>}
          </div>
          <Button
            ariaLabel="Dismiss Post"
            className="dismiss-button"
            styleType="clear"
            onClick={handleDelete}
          >
            <FontAwesomeIcon color="#b20d0d" icon={faXmarkCircle} size="lg" />
          </Button>
        </div>
        <div className="post-card-content">
          {post.thumbnail && (
            <img
              alt=""
              className="thumbnail"
              src={post.thumbnail}
              onClick={() => setsShowModal(true)}
            />
          )}
          <span className="post-title">{post.title}</span>
        </div>
        <div className="post-card-footer">
          <span className="post-card-comments">
            Comments: {post.num_comments}
          </span>
          <Button
            ariaLabel="View Post"
            className="viewpost-button"
            styleType="success"
            onClick={handleSelect}
          >
            View Post
          </Button>
        </div>
      </div>
      {showModal && post.thumbnail && (
        <ModalImage
          setsShowModal={setsShowModal}
          show={showModal}
          src={post.thumbnail}
        />
      )}
    </>
  );
};

export default PostCard;
