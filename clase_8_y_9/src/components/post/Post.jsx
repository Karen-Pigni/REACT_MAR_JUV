import React from 'react';
import './post.css';
const Post = ({ id, title, body }) => {
  return (
    <div>
      <div className="post">
        <div className="number">{id}</div>
        <div className="post-info">
          <h2 className="post-title">{title}</h2>
          <p className="post-body">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
