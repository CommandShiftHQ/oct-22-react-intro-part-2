import React, { useState } from "react";
import "../styles/post.css";

const Post = ({ postData, handleUpvote }) => {
  const { title, author, isPublished, date, body, tags } = postData;
  const [count, setCount] = useState(0);

  const handleClick = (event) => {
    setCount((prev) => prev + 1);
    handleUpvote(event.target.value);
  };

  return (
    <div className="post">
      <div className="post-heading">
        <h2>{title}</h2>
        {isPublished ? body : "Coming soon!"}
      </div>
      <div className="post-counter">
        <span>Upvotes: {count}</span>
        <button type="button" value={title} onClick={handleClick}>
          Upvote this
        </button>
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <h3>Tags:</h3>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
