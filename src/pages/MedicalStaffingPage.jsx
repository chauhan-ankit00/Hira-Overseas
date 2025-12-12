import React from 'react'
import { Helmet } from 'react-helmet-async'
import MedicalStaffing from '../components/MedicalStaffing.jsx'

export default function MedicalStaffingPage() {
  return (
    <>
      <Helmet>
        <title>Medical & Healthcare Recruitment | Doctors, Nurses & Paramedics</title>
        <meta name="description" content="Expert recruitment of licensed Doctors, Nurses and Paramedical professionals from India for hospitals and clinics across GCC, Europe and Africa. Fast mobilisation and verified credentials." />
      </Helmet>
      <MedicalStaffing />
    </>
  )
}

