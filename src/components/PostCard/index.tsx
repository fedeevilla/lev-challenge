import React from "react";
import moment from "moment";
import { IPost } from "./types";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { deletePost, selectPost } from "../../store/actions/posts";

const PostCard = ({ post }: { post: IPost }): JSX.Element => {
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(selectPost(post.id));
  };

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <div className="post-card-container" onClick={() => handleSelect()}>
      <div className="post-card-header">
        <div>
          <span className="post-card-author">{post.author}</span>
          <span className="post-card-date">
            ({moment(moment(post.created), "YYYYMMDD").fromNow()})
          </span>
          {!post.visited && <span className="post-card-seen">New!</span>}
        </div>
        <button className="delete-button" onClick={() => handleDelete()}>
          Dismiss
        </button>
      </div>
      <div className="post-card-content">
        {post.thumbnail && (
          <img alt="" src={post.thumbnail} className="thumbnail" />
        )}
        <span>{post.title}</span>
      </div>
      <div className="post-card-footer">
        <span className="post-card-comments">
          Comments: {post.num_comments}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
