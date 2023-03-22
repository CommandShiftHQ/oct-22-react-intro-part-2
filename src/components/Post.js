import React from "react";

const Post = ({ postData }) => {
  const { title, author, isPublished, date, body, tags } = postData;

  return (
    <div className="post">
      <div className="post-heading">
        <h2>{title}</h2>
        {isPublished ? body : "Coming soon!"}
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
