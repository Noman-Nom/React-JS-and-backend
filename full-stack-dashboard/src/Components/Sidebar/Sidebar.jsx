import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='top'>
                <div className="logo">
                    <img src="/logo1.png" alt="" />

                </div>  
            </div>
            <hr/>
            <div className='center'>
                <ul>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className='bottom'>color option</div>
        </div>
    )
}

export default Sidebar