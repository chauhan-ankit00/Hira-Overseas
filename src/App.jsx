import React from 'react'
import About from './components/About.jsx'
import Client from './components/Client.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'

import NavbarHero from './components/NavbarHero.jsx'
import Newsletter from './components/Newsletter.jsx'
import Service from './components/Service.jsx'
import ContactForm from './components/ContactForm.jsx'
import Team from './components/Team.jsx'
import Testimonial from './components/Testimonial.jsx'
import Blog from './components/Blog.jsx'
import Countries from './components/Countries.jsx'
import Career from './components/Career.jsx'

export default function App() {
  return (
    <>
    
     <NavbarHero />
      <About />
      {/* <Newsletter /> */}
      <Service />
      <Features />
      <Career/>
      {/* <Client /> */}
      
      
      
      
      <Testimonial />

      
      <Team />
      <Blog />
      
      <Countries/>
      <ContactForm />
      
      <Footer /> 
    </>
  )
}
