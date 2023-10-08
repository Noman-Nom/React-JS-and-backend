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
          New
        </div>

    </div>
  )
}

export default New