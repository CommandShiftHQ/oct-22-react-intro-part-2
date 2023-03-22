import React, { useState } from "react";
import Post from "./Post";
import "../styles/postlist.css";

const Postlist = ({ posts }) => {
  const [lastUpvoted, setLastUpvoted] = useState("");

  const handleUpvote = (title) => {
    setLastUpvoted(title);
  };

  return (
    <div className="postlist">
      {lastUpvoted}
      {posts.map((post, index) => (
        <Post key={index} postData={post} handleUpvote={handleUpvote} />
      ))}
    </div>
  );
};

export default Postlist;
