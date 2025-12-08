import React from 'react'
import About from '../components/About.jsx'
import Service from '../components/Service.jsx'
import Features from '../components/Features.jsx'
import Career from '../components/Career.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Team from '../components/Team.jsx'
import Blog from '../components/Blog.jsx'
import Countries from '../components/Countries.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  return (
    <>
      <About />
      <Service />
      <Features />
      <Career/>
      <Countries/>
      <Team />
      <Testimonial />
      <Blog />
      
      <ContactForm />
    </>
  )
}

