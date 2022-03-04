import React from "react";
import { IPost } from "../PostCard/types";
import "./styles.scss";

const PostDetails = ({ post }: { post: IPost }): JSX.Element => {
  return (
    <div className="post-details-container">
      <h1>{post?.title}</h1>
    </div>
  );
};

export default PostDetails;
