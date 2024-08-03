import React from 'react'
import dheeraj from './image/dheeraj.jpg';
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
const contact = () => {
  return (
    <div className='plat aboutplat'>
      <div className="formgroup aboutgroup" id="message-form">
        <div className='aboutText'>
          <h2 className='mainheading'>About</h2>
          <p>Our project aims to develop a robust and efficient system that seamlessly integrates Speech-to-Text (STT) and Text-to-Speech (TTS) functionalities. The goal is to create a versatile tool that can convert spoken language into written text and vice versa, enhancing accessibility, communication, and user interaction across various applications</p>
          <span>Creator: </span>
          <h1 className='mainheading'>Dheeraj Khatri</h1>
          <div className='icondiv'>
            
            <a href="https://www.facebook.com/share/Qzyhao2jVaTh65B9/?mibextid=qi2Omg" target='_blank' className='icon'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.linkedin.com/in/dheeraj-khatri-001176291" target="_blank" className='icon'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/dheerajxkhatri69/" target="_blank" className='icon'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.youtube.com/@Couragethevlog" target="_blank" className='icon'><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
        <div className='aboutpic'>
          <div className="slider_container">
            <div className="slider">
              <div className="slide one">
                <img src={dheeraj} alt="" />
              </div>
              <div className="slide two">
                <img src={dheeraj} alt="" />
              </div>
              <div className="slide three">
                <img src={dheeraj} alt="" />
              </div>
              <div className="slide four">
                <img src={dheeraj} alt="" />
              </div>
              <div className="slide four">
                <img src={dheeraj} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default contact
