import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm.jsx'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | International Manpower & Recruitment Services</title>
        <meta name="description" content="Connect with our team for manpower requirements, partnerships or staffing support. Fast response and end-to-end recruitment solutions for global employers." />
      </Helmet>
      <ContactForm />
    </>
  )
}

