import React from 'react'
import { Helmet } from 'react-helmet-async'
import Countries from '../components/Countries.jsx'

export default function CountriesPage() {
  return (
    <>
      <Helmet>
        <title>Global Manpower Deployment | UAE, Saudi Arabia, UK, Europe and GGC</title>
        <meta name="description" content="We supply skilled and professional manpower to employers in the Middle East, Europe and Africa. Trusted recruitment partner with international reach and proven success." />
      </Helmet>
      <Countries />
    </>
  )
}

