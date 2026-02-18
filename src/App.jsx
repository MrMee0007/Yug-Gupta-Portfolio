import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import HireMe from './components/HireMe'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />     
      <Route path="/about" element={<About />} />
      <Route path='/work' element={<Work />} />
      <Route path='/hireme' element={<HireMe />} />
      <Route path='/contact' element={<ContactSection />} />
    </Routes>
    </>
  )
}

export default App
