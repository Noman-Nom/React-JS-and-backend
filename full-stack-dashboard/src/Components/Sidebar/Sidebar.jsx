import React from 'react'
import './Sidebar.scss'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ManIcon from '@mui/icons-material/Man';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ClassIcon from '@mui/icons-material/Class';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
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
                    <p className='title'>Main</p>
                    <li>
                        <SpaceDashboardIcon className="icon"/>
                        <span>Dashboard</span></li>

                        <p className='title'>Academic</p>
                    <li>
                        <GroupOutlinedIcon className="icon"/>
                        <span>Users</span></li>
                    <li>
                        <ManIcon className="icon"/>
                        <span>Students</span></li>
                        <p className='title'>List</p>
                    <li>
                        <ImportContactsIcon className="icon"/>
                        <span>Courses</span></li>
                    <li>
                        <ClassIcon className="icon"/>
                        <span>Sumesters</span></li>
                    <li>
                     <AutoStoriesIcon className="icon"/>
                        <span>Sessions</span></li>
                    <li>
                        <TextFieldsIcon className="icon"/>
                        <span>Fields</span></li>
                        <p className='title'>Users</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                       
                        <span>Profile</span></li>
                    <li>
                        <LockIcon className="icon"/>
                        <span>Logout</span></li>
                </ul>
            </div>
            <div className='bottom'>color option</div>
        </div>
    )
}

export default Sidebar