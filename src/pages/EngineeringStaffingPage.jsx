import React from 'react'
import { Helmet } from 'react-helmet-async'
import EngineeringStaffing from '../components/EngineeringStaffing.jsx'

export default function EngineeringStaffingPage() {
  return (
    <>
      <Helmet>
        <title>Engineering & Technical Recruitment | Certified Global Professionals</title>
        <meta name="description" content="Specialized sourcing of Civil, Mechanical, Electrical, IT and Technical Engineers. Skilled technicians, maintenance teams and certified professionals deployed worldwide." />
      </Helmet>
      <EngineeringStaffing />
    </>
  )
}

