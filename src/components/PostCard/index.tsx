import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, selectPost } from "../../store/actions/posts";
import ModalImage from "../ModalImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { IPostCard } from "../../types";
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
            className="dismiss-button"
            styleType="clear"
            onClick={() => handleDelete()}
          >
            <FontAwesomeIcon color="red" icon={faXmarkCircle} size="lg" />
          </Button>
        </div>
        <div className="post-card-content">
          {post.thumbnail && (
            <img
              alt=""
              src={post.thumbnail}
              className="thumbnail"
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
            styleType="success"
            className="viewpost-button"
            onClick={() => handleSelect()}
          >
            View Post
          </Button>
        </div>
      </div>
      {showModal && post.thumbnail && (
        <ModalImage
          show={showModal}
          src={post.thumbnail}
          setsShowModal={setsShowModal}
        />
      )}
    </>
  );
};

export default PostCard;
