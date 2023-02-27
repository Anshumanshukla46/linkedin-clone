import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>

            {/* icon and search bar) */}
            <div className="header_left">


                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin-logo" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>


            {/* use the components when someting is repeating */}
            {/* notification, home etc..  */}
            <div className="header_right">


                {/* If want to pass the component then use Icon={}  */}
                <HeaderOption Icon={HomeIcon} title="Home" />

                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />

                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />

                <HeaderOption Icon={ChatIcon} title="Messaging" />

                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                <HeaderOption avatar="./images/Anshuman Shukla Image.jpg" title='me' />

            </div>
        </div>
    )
}

export default Header
