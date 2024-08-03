import React from 'react'
// import Notsupport from "./notsupport";
import { Link } from "react-router-dom";

const voicetext = () => {
  return (
    <div className='plat'>
    <div className="formgroup" id="message-form">
        <label htmlFor="message" className='massege setupspan'><span>🙃</span><span>Speech-To-Text</span>
        <span><Link to="/dheeraj-text/speech/Note" className='notelink'>📝</Link></span>
        </label>
        
        {/* <div className='main-content'>{transcript}</div> */}
        <div className='main-content'></div>
        <div className='btn-box box-voice'>
            {/* <input type="submit" onClick={StartListening} className='button-74' value="Start" />
            <input type="submit" onClick={SpeechRecognition.stopListening} className='button-74' value="Stop" />
            <input type="submit" onClick={resetTranscript} className='button-74' value="Reset"/> */}
            <input type="submit" className='button-74' value="Start" />
            <input type="submit" className='button-74' value="Stop" />
            <input type="submit" className='button-74' value="Reset"/>
        </div>
    </div>
</div>
  )
}

export default voicetext
