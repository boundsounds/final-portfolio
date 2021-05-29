import React, { useState } from "react";
import BlogPosts from "./BlogPosts";
import BlogForm from "./BlogForm";

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const addPost = (post) => {
      const newArray = [...posts, post]
      setPosts(newArray)

  };
  return (
    <div>
      <BlogPosts posts={posts} />
      <BlogForm addPost={addPost}/>
    </div>
  );
};

Blog.propTypes = {};
export default Blog;
