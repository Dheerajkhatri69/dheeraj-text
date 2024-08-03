import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/dheeraj-text/">Home</Link></li>
                <li><Link to="/dheeraj-text/About">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default header
