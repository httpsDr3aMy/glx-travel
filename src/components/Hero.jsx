import React from 'react'
import SpaceVideo from '../assets/space.mp4'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
        <video loop muted autoPlay id='hero__video'>
          <source src={SpaceVideo}/>   
        </video>
        <header className="hero__content" data-aos="fade-up"
     data-aos-duration="1000">
            <h2 className='hero__content-title'>Galaxy. Travel.</h2>
            <p className="hero__content-description">World's first civilian space travel.</p>
            <div className="buttons-box">
              <Link to={'/training'} className='buttons-box__button'>training</Link>
              <Link to={'/pricing'} className='buttons-box__button buttons-box__button--gray'>launch</Link>
            </div>
        </header>

    </div>
  )
}

export default Hero