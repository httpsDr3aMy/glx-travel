import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/PricingCards'

const Pricing = () => {
  return (
    <section className="pricing">
        <Navbar />
        <HeroImage heading='pricing.' description='Choose your trip.'/>
        <PricingCards />
        <Footer />
    </section>
  )
}

export default Pricing