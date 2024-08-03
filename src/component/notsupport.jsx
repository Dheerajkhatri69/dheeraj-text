import React from 'react'
import "./textD.css"

const notsupport = () => {
    return (
        <div className='plat'>
            <div className="formgroup" id="message-form">
                <label htmlFor="message" className='massege masslab'>Error</label>
                <div className='main-content errorshow'>Your browser not Supports SpeechRecognition</div>
            </div>
        </div>
    )
}

export default notsupport
