import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import CoverImage from "./images/cover_image.jpg"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'


function Sidebar() {

    // using redux to get the user info
    // using redux i can get the user info at any point of time
    const user = useSelector(selectUser);

    // this user do have all information
    // email, uid, displayName, photoUrl


    function recentItem(item) {
        return (
            <div className="sidebar_recentItem">

                <span className="sidebar_hash">#</span>

                <p>{item}</p>

            </div>
        )
    }

    return (
        <div className='sidebar'>

            {/* profile */}
            <div className="sidebar_top">

                <img src={CoverImage} alt="cover-image" />

                <Avatar className='sidebar_avatar' src={user.photoUrl} alt="profile-photo" >
                    {user.email[0]}
                </Avatar>

                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>


            {/* stats */}
            <div className="sidebar_stats">

                <div className="sidebar_stat">

                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>2,543</p>

                </div>


                <div className="sidebar_stat">

                    <p>Views on posts</p>
                    <p className='sidebar_statNumber'>4,212</p>

                </div>

            </div>


            <div className="sidebar_button">
                <p>Recent</p>

                {/* jsx from function */}

                {recentItem('reactjs')}
                {recentItem('development')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('redux')}
                {recentItem('programming')}

            </div>

        </div>
    )
}

export default Sidebar
