import React from 'react'
import './index.css';

function Crumb(props) {
    return (
        <div className="crumb">
            <div className="ui breadcrumb">
                <div className=" active section">Monday</div>
                <i className="right arrow icon divider" />
                <div className="section">Tuesday</div>
                <i className="right arrow icon divider" />
                <div className="section">Wednesday</div>
                <i className="right arrow icon divider" />
                <div className="section">Thursday</div>
                <i className="right arrow icon divider" />
                <div className="section">Friday</div>
                <i className="right arrow icon divider" />
                <div className="section">Saturday</div>
                <i className="right arrow icon divider" />
                <div className="section">Sunday</div>
            </div>
        </div>

    )
}

export default Crumb;



