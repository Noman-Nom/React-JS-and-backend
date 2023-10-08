import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './Single.scss'


const Single = () => {
  return (
    <div className='Single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className='itemImg' src="https://images.pexels.com/photos/4145069/pexels-photo-4145069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />

              detail
            </div>
          </div>
          <div className="right"></div>

        </div>

        <div className="bottom">

        </div>
        
    
    </div>
    </div>
  )
}

export default Single