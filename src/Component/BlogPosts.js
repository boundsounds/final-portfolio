import React from "react";

const Post = (props) => {
  return (
    <div className="blog-post">
      <div className="blog-info">
        <div className="blog-name">Name:{props.post.name}</div>
      </div>
      <div className="blog-comment">Post:{props.post.comment}</div>
    </div>
  );
};
const BlogPosts = (props) => {
  console.log(props.posts);
  return (
    <div className="blog-post-list">
      {props.posts.map((p) => {
        return <Post key={p.name} post={p} />;
      })}
    </div>
  );
};

BlogPosts.propTypes = {};

export default BlogPosts;
