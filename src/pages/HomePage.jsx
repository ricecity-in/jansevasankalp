import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Body from '../components/Body'
import Section from '../components/Section'

function HomePage() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Section/>
      <Body/>
      <Footer/>
    </>
  )
}

export default HomePage