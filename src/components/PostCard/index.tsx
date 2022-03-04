import React from "react";
import moment from "moment";
import { IPost } from "./types";
import "./styles.css";

const PostCard = ({ post }: { post: IPost }): JSX.Element => {
  const postDate = moment(post.created * 1000);

  return (
    <div className="post-card-container">
      <div className="post-card-header">
        <span className="post-card-author">{post.author}</span>
        <span className="post-card-date">
          {moment(postDate, "YYYYMMDD").fromNow()}
        </span>
      </div>
      <div className="post-card-content">
        {post.thumbnail && (
          <img alt="" src={post.thumbnail} className="thumbnail" />
        )}
        <span>{post.title}</span>
      </div>
    </div>
  );
};

export default PostCard;
