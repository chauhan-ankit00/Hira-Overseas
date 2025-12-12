import React from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Global Manpower Consultancy | Healthcare, Engineering & Skilled Workforce Recruitment</title>
        <meta name="description" content="Premium international HR consultancy delivering qualified Doctors, Engineers, Nurses, Paramedical staff and skilled blue-collar workers to employers across the Middle East, Europe and Africa. Fast, compliant and reliable global staffing solutions." />
      </Helmet>
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

