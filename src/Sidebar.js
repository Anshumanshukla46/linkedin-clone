import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import CoverImage from "./images/cover_image.jpg"
import Image from "./images/Anshuman Shukla Image.jpg"


function Sidebar() {

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

                <img src={CoverImage} alt="my-image" />

                <Avatar className='sidebar_avatar' src={Image} alt="my-image" />

                <h2>Anshuman Shkla</h2>
                <h4>anshumanshukla46@gmail.com</h4>

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
