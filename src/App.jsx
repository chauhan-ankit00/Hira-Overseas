import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import NavbarHero from './components/NavbarHero.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
// import MedicalStaffingPage from './pages/MedicalStaffingPage.jsx'
// import EngineeringStaffingPage from './pages/EngineeringStaffingPage.jsx'
// import SkilledManpowerPage from './pages/SkilledManpowerPage.jsx'
import CareerPage from './pages/CareerPage.jsx'
import TestimonialPage from './pages/TestimonialPage.jsx'
import CountriesPage from './pages/CountriesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <NavbarHero />
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/medical-staffing" element={<MedicalStaffingPage />} />
          <Route path="/engineering-staffing" element={<EngineeringStaffingPage />} />
          <Route path="/skilled-manpower" element={<SkilledManpowerPage />} /> */}
          <Route path="/career" element={<CareerPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
