import React from 'react'
import { Link } from 'react-router-dom'
import "./bar-fotter.css"

const chooice = () => {
    return (
        <div className='footer'>
            <ul className="nav-links">
                {/* <li className="center"><a href="#">Text-To-Speech</a></li> */}
                <li className="center"><Link to="/dheeraj-text/">Text-To-Speech</Link></li>
                <li className="upward"><Link to="/dheeraj-text/speech">Speech-To-Text</Link></li>
                
                {/* <li className="upward"><a href="#">Speech-To-Text</a></li> */}
                {/* <Link to="/dheeraj-text/">Home</Link>
                {" | "}
                <Link to="/dheeraj-text/speech">Contact</Link> */}
            </ul>
        </div>
    )
}

export default chooice
