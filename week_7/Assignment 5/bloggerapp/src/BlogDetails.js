
import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.title}>
          <h3>{blog.title}</h3>
          {}
          <h4>By: {blog.author ? blog.author : 'Anonymous'}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;