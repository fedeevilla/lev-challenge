import moment from "moment";
import React from "react";
import { IPost } from "../PostCard/types";
import "./styles.scss";

const PostDetails = ({ post }: { post: IPost }): JSX.Element => {
  return (
    <div className="post-details-container">
      <h1 className="title-post">{post?.title}</h1>
      {post?.created && post?.author && (
        <h3 className="created-post">
          {`(${post?.author} - ${moment(post?.created).format(
            "MM/DD/YYYY HH:mm:ss"
          )})`}
        </h3>
      )}
      {post?.thumbnail && (
        <div className="image-container">
          <img src={post?.thumbnail} alt="" />
        </div>
      )}
      {post?.selftext && <h3 className="selftext-post">{post?.selftext}</h3>}
      {post?.num_comments && (
        <h3 className="comments-post">{`${post?.num_comments} comments.`}</h3>
      )}
    </div>
  );
};

export default PostDetails;
