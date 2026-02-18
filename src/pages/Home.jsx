import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/Aboutmain'
import HeroSection2 from '../components/HeroSection2'
import ProfileSummary from '../components/ProfileSummary'
import SkillsSection from '../components/SkillsSection'
import Workex from '../components/Workex'
import EducationSection from '../components/EducationSection'
import ContactSection from '../components/ContactSection'
import ServicesSection from '../components/ServicesSection'
import TimelineGallery from '../components/TimelineGallery'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection2 from '../components/ServicesSecion2'
import Aboutmain from '../components/Aboutmain'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Aboutmain />
      <ProjectsSection />
      {/* <TimelineGallery /> */}
      <ServicesSection2 />
      <SkillsSection />
      {/* <Workex /> */}
      {/* <EducationSection /> */}
      <Footer />
    </div>
  )
}

export default Home
