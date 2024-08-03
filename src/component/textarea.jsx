import React from 'react';
import "./textD.css"

const Textarea = () => {
    
    function speak(){
        let textvalue = document.getElementById('textbox').value;
        if(textvalue !== ""){
            let synth = window.speechSynthesis;
            let voice = new window.SpeechSynthesisUtterance(textvalue);
            synth.speak(voice);
        }else{
            alert("Please write same text in text-field!")
        }
    }
    return (
        <div className='plat'>
            <div className="formgroup" id="message-form">
                <label htmlFor="message" className='massege'>Text-To-Speech</label>
                <textarea id="textbox" placeholder='Write here!' name="message"></textarea>
                <div className='btn-box'><input type="submit" className='button-74' id='btn' onClick={speak} value="Read" /></div>
            </div>
        </div>
    );
}

export default Textarea;
