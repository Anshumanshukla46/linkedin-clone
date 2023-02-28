import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./Widgets.css"


function Widgets() {

    // reusable component inside the function itself
    function newsArticle(heading, subtitle) {
        return (
            <div className="widgets_article">

                <div className="widgets_articleLeft">
                    <FiberManualRecordIcon />
                </div>

                <div className="widgets_articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>

            </div>
        )
    }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <span>LinkedIn News</span>
                <InfoIcon />
            </div>

            {newsArticle("ReactJS By Facebook", "Top news - 9999 readers")}
            {newsArticle("Redux used in Production", "Top news - 2317 readers")}
            {newsArticle("Tesla Hits New High", "Top news - 9812 readers")}
            {newsArticle("Bitcoin Breaks", "Top news - 3864 readers")}
            {newsArticle("Market to know", "Top news - 1264 readers")}
            {newsArticle("Health Guidelines by govt", "Top news - 912 readers")}

        </div>

    )
}

export default Widgets
