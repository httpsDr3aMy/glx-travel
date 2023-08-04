import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <HeroImage heading='Contact.' description='Contact GLX Travel.'/>
        <ContactForm />
      </section>
      <Footer />
    </>
  )
}

export default Contact