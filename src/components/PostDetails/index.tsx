import React, { useState } from "react";
import moment from "moment";

import ModalImage from "../ModalImage";
import { useSelector } from "../../hooks/useSelector";
import "./styles.scss";

const PostDetails = (): JSX.Element => {
  const [showModal, setsShowModal] = useState<boolean>(false);
  const { selected } = useSelector(({ posts }) => posts);
  const localSelected = localStorage.getItem("selected");

  const selectedPost = (localSelected && JSON.parse(localSelected)) || selected;

  return (
    <>
      {!selectedPost?.id ? (
        <h1
          className="label-result"
          data-test="select-post-item"
          style={{ color: "red" }}
        >
          Select a post from the list!
        </h1>
      ) : (
        <div className="post-details-container">
          <h1 className="title-post" data-test="title-post">
            {selectedPost?.title}
          </h1>
          {selectedPost?.created && selectedPost?.author && (
            <h3 className="created-post">
              {`(${selectedPost?.author} - ${moment(
                selectedPost?.created
              ).format("MM/DD/YYYY HH:mm:ss")})`}
            </h3>
          )}
          {selectedPost?.thumbnail && (
            <div className="image-container">
              <img
                alt=""
                src={selectedPost?.thumbnail}
                onClick={() => setsShowModal(true)}
              />
            </div>
          )}
          {selectedPost?.selftext && (
            <h3 className="selftext-post">{selectedPost?.selftext}</h3>
          )}
          <h3 className="comments-post">{`${selectedPost?.num_comments} comments.`}</h3>
          {showModal && selectedPost.thumbnail && (
            <ModalImage
              setsShowModal={setsShowModal}
              show={showModal}
              src={selectedPost.thumbnail}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PostDetails;
