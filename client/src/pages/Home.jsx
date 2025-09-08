import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import FeaturedProperties from '../components/FeaturedProperties'
import Faq from '../components/Faq'
import Cta from '../components/Cta'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#fffbee] to-white">
      <Hero />
      <About />
      <FeaturedProperties />
      <Faq />
      <Cta />
      <Testimonials />
    </div>
  )
}

export default Home