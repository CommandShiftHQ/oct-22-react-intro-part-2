import React from "react";
import Post from "./Post";
import "../styles/postlist.css";

const Postlist = ({ posts }) => {
  return (
    <div className="postlist">
      {posts.map((post, index) => (
        <Post key={index} postData={post} />
      ))}
    </div>
  );
};

export default Postlist;
