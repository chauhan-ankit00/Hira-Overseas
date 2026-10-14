import React from 'react'
import { Helmet } from 'react-helmet-async'
import About from '../components/About.jsx'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | International Recruitment & Manpower Supply Experts</title>
        <meta name="description" content="Learn about our global expertise in healthcare, engineering, technical and skilled manpower recruitment. Ethical, licensed and trusted by employers worldwide for high-quality staffing." />
      </Helmet>
      <About />
    </>
  )
}

