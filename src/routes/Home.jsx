import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <section className="home">
          <Hero />
        </section>
        <Footer />
    </>
  )
}

export default Home