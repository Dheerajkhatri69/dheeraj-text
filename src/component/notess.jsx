import React from 'react'
import { Link } from 'react-router-dom'
import "./textD.css"

const notess = () => {
  return (
    <div className='plat'>
        <div className="formgroup " id="message-form">
            <label htmlFor="message" className='massege'>Note</label>
            <div className='main-content notes'>Speech-to-Text could't Support in Mobile!</div>
            <div className='btn-box'><Link to="/dheeraj-text/speech" className='notelink'>Back</Link></div>
        </div>
    </div>
  )
}

export default notess
