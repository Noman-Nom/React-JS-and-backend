import React from 'react'
import './New.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'

const New = () => {
  return (
    <div className="New">
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>Add New User</h1>
          </div>
          <div className="bottom">
            <div className="left">
                <img src="/noimg.jpg" alt="upload image" />
            </div>
            <div className="right">Right</div>
          </div>
        </div>

    </div>
  )
}

export default New