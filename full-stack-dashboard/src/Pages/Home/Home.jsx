import React from 'react'
import './Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widgets from '../../Components/Widgets/Widgets'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
          <div className="widgets">
            <Widgets/>
            <Widgets/>
            <Widgets/>
            <Widgets/>
          </div>
      </div>
    </div>
  )
}

export default Home