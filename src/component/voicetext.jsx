import React from 'react'
import Notsupport from "./notsupport";
import { Link } from "react-router-dom";
import useSpeechToText from 'react-hook-speech-to-text';

const voicetext = () => {

    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    if (error) return <Notsupport />;
    function resettext(){
        var errorMsg = "<span></span>"
        document.getElementById("maintext").innerHTML = errorMsg
    }
    return (
        <div className='plat'>
            <div className="formgroup" id="message-form">
                <label htmlFor="message" className='massege setupspan'><span>🙃</span><span>Speech-To-Text</span>
                    <span><Link to="/dheeraj-text/speech/Note" className='notelink'>📝</Link></span></label>

                <div className='main-content' id='maintext' >
                    {results.map((result) => (
                        <span key={result.timestamp}>{result.transcript}</span>
                    ))}
                    {interimResult && <span>{interimResult}</span>}
                </div>
                <div className='btn-box box-voice'>
                    <input type="submit" onClick={isRecording ? stopSpeechToText : startSpeechToText} className='button-74' value={isRecording ? 'Stop' : 'Start'} />
                    <input type="submit" onClick={resettext} className='button-74' value="Reset" />
                </div>
            </div>
        </div>
    );
}

export default voicetext
