import React from 'react'
import './Sidebar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
        </div>
      </div>
    </div>
  )
}

export default Navbar