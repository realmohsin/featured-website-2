import React from 'react'
import Layout from '../components/Layout'
import ContactHero from '../components/ContactPage/ContactHero'
import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactPage/ContactInfo'

export default function Careers ({ location }) {
  return (
    <Layout location={location}>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </Layout>
  )
}
