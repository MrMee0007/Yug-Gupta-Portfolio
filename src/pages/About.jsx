import React from 'react'
import Aboutmain from '../components/Aboutmain'
import AboutSection from '../components/AboutSection'
import Navbar from '../components/Navbar'
import ServicesSection from '../components/ServicesSection'
import Workex from '../components/Workex'
import EducationSection from '../components/EducationSection'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutSection />
        <ServicesSection />
        <Workex />
        <EducationSection />
        <Footer />
    </div>
  )
}

export default About
