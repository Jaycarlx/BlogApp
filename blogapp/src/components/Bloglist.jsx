import React from 'react'

const Bloglist = ({ blogs, title}) => {
  return (
      <div className="blog-list">
          <h1>{ title}</h1>
          {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button>Delete blog</button>
        </div>
        ))
      } 
    </div>
  )
}

export default Bloglist