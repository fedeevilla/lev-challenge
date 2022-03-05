import React, { useState } from "react";
import moment from "moment";
import ModalImage from "../ModalImage";
import { IPostDetails } from "./types";
import "./styles.scss";

const PostDetails = ({ post }: IPostDetails): JSX.Element => {
  const [showModal, setsShowModal] = useState<boolean>(false);

  return (
    <div className="post-details-container">
      <h1 className="title-post" data-test="title-post">
        {post?.title}
      </h1>
      {post?.created && post?.author && (
        <h3 className="created-post">
          {`(${post?.author} - ${moment(post?.created).format(
            "MM/DD/YYYY HH:mm:ss"
          )})`}
        </h3>
      )}
      {post?.thumbnail && (
        <div className="image-container">
          <img
            alt=""
            src={post?.thumbnail}
            onClick={() => setsShowModal(true)}
          />
        </div>
      )}
      {post?.selftext && <h3 className="selftext-post">{post?.selftext}</h3>}
      <h3 className="comments-post">{`${post?.num_comments} comments.`}</h3>
      {showModal && post.thumbnail && (
        <ModalImage
          show={showModal}
          src={post.thumbnail}
          setsShowModal={setsShowModal}
        />
      )}
    </div>
  );
};

export default PostDetails;
