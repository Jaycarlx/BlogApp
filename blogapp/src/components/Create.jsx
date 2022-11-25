import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Chibuzor");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory()
  
const handleSubmit = (e) =>{
  e.preventDefault();
  const blog = {title, body, author}

  setIsPending(true);

  fetch('http://localhost:8000/blogs',{
    method : 'POST',
    headers : { 'Content-Type': 'application/json' },
    body : JSON.stringify(blog)
  }).then (() => {
    setIsPending(false);
    console.log("new blog added successfully");
    history.push('/');
  })
}


  return (
      <div className="create">
          <h2>Add new Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input type="text" id="title" 
            value = {title} 
            onChange = { (e) => setTitle(e.target.value)}
            />
            <label >Blog body</label>
           <textarea
           required
           value = {body} 
            onChange = { (e) => setBody(e.target.value)}></textarea>
            <label >Blog Author</label>
            <select
            required
              value = {author} 
            onChange = { (e) => setAuthor(e.target.value)}>
              <option>JAy</option>
              <option>Chibuzor</option>
              <option>Molokwu</option>
            </select>
          </form>
          {!isPending && <button onClick={handleSubmit}>Add blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
        
    </div>
  )
}

export default Create