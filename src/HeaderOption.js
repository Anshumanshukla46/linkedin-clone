import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css" // css


// capital because Icon is components
function HeaderOption({ avatar, Icon, title, onClick }) {

    // THINK OF "USER" AS MOVING IN ALL COMPONENTS AND USING REDUX, ANY COMPONENT CAN ACCESS IT AT ANY TIME

    // using redux to get the user info
    // using redux i can get the user info at any point of time
    const user = useSelector(selectUser);

    // this user do have all information
    // email, uid, displayName, photoUrl


    return (

        <div className='headerOption' onClick={onClick}>

            {/* components as "Icon" has been passed */}

            {Icon && <Icon className="headerOption_icon" />}


            {avatar && (<Avatar className='headerOption_icon'>
                {user?.email[0]}
            </Avatar>)}


            <h3 className='headerOption_title'>{title}</h3>

        </div>
    )
}

export default HeaderOption
