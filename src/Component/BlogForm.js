import React, { useState } from "react";

const BlogForm = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function submitPost() {
    const obj = {
      name: name,
      comment: comment,
    };
    props.addPost(obj);
  }

  return (
    <div className="mainform">
      <div className="form-group w-25">
        
        <input
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        
        <textarea
          placeholder="Write Your Blog Post Here"
          className="form-control"
          rows="3"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={submitPost}>
        Submit
      </button>
    </div>
  );
};

export default BlogForm;
