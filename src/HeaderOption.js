import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css" // css
import image from "./images/Anshuman Shukla Image.jpg"


// capital because Icon is components
function HeaderOption({ avatar, Icon, title, onClick }) {
    return (

        <div className='headerOption' onClick={onClick}>

            {/* components as "Icon" has been passed */}

            {Icon && <Icon className="headerOption_icon" />}


            {avatar && (<Avatar className='headerOption_icon' src={image} />)}


            <h3 className='headerOption_title'>{title}</h3>

        </div>
    )
}

export default HeaderOption
