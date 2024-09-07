import React from 'react'
import Header from '../components/Header'
import './AboutMe.css'
import image from '../Images/nafisha.jpg'

function AboutMe() {
  return (
    <div className='AboutMe'>
      <Header />
      <div className='aboutme-content'>
        <div className='aboutme-content__image'>
          <img src={image} alt="Profile" />
        </div>
        <div className='aboutme-content__description'>
          <h2>Hi, I am Nafisha</h2>
          <p>I am a B tech-(CSE) final year student with a keen interest in full-stack development and Machine Learning. I enjoy solving complex problems and creating impactful projects.</p>
          <button className='contact-button'>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe