import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <h1>Jay Carlos</h1>
    <div className='navlinks'>
      <a href="/">Home</a>
        <a href="/create"  className="create">Add New</a>
    </div>
    </div>
  )
}

export default Navbar