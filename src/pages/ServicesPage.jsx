import React from 'react'
import { Helmet } from 'react-helmet-async'
import Service from '../components/Service.jsx'

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Manpower Recruitment Services | Medical, Engineering & Skilled Workforce</title>
        <meta name="description" content="Explore our recruitment services for Doctors, Nurses, Engineers, Paramedical staff and skilled tradesmen. End-to-end sourcing, screening, visa processing and deployment." />
      </Helmet>
      <Service />
    </>
  )
}

