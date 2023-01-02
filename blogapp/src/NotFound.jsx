import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import './App.css'


const NotFound = () => {
  return (
    <div>
    <h2>Sorry</h2>
    <p>That page cannot be found</p>
    <Link to="/">Go back</Link>
    </div>
  )
}

export default NotFound