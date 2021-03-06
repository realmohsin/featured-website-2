import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import CareersIntro from '../components/CareersPage/CareersIntro'
import JobListings from '../components/CareersPage/JobListings'

export default function Careers ({ location }) {
  return (
    <Layout location={location}>
      <CareersIntro />
      <JobListings />
    </Layout>
  )
}
