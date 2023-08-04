import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Astronaut from '../assets/moon.jpg'
import Pod from '../assets/pod.jpg'
import { Link } from 'react-router-dom'
const Training = () => {
  return (
    <section className="training">
        <Navbar />
        <HeroImage heading='training.' description='Pre-Flight & In-Flight Training.'/>
        <main>
            <article className="training-content" data-aos="fade-right" data-aos-once="true">
                <h2 className="training-content__title">Training</h2>
                <p className="training-content__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla temporibus voluptate fugiat aperiam voluptas tempore velit saepe.</p>
                <Link to={'/contact'} className='training-content__button'>contact</Link>
            </article>
            <div className="image-container" data-aos="zoom-in-up" data-aos-once="true">
                <img src={Astronaut} alt="astronaut" className='training__image training__image--astronaut'/>
                <img src={Pod} alt="Pod" className='training__image training__image--pod'/>
            </div>
        </main>
        <Footer />
    </section>
  )
}

export default Training