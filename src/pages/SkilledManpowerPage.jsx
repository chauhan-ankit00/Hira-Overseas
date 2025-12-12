import React from 'react'
import { Helmet } from 'react-helmet-async'
import SkilledManpower from '../components/SkilledManpower.jsx'

export default function SkilledManpowerPage() {
  return (
    <>
      <Helmet>
        <title>Skilled Blue-Collar Manpower Supply | Technicians & Tradesmen</title>
        <meta name="description" content="Hire trade-tested Electricians, Plumbers, Carpenters, Welders, Masons, Drivers, AC Technicians and general labour. Reliable workforce for construction, manufacturing and facility projects." />
      </Helmet>
      <SkilledManpower />
    </>
  )
}

