import React from 'react'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LanguageIcon from '@mui/icons-material/Language';
import './Navbar.scss'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SavedSearchIcon/>
          
        </div>
        <div className="items">
          <div className="item">
                <LanguageIcon />
          </div>
          <div className="item">
                <Brightness4Icon/>
          </div>
          <div className="item">
                <FullscreenIcon/>
          </div>
          <div className="item">
                <CircleNotificationsIcon/>
          </div>
          <div className="item">
               <ChatBubbleIcon/>
          </div>
          <div className="item">
               <FormatListBulletedIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar