import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import HeroSection from '../components/HomePage/HeroSection'
import FeaturedOnSection from '../components/HomePage/FeaturedOnSection'
import IntroSection from '../components/HomePage/IntroSection'
import FocusSection from '../components/HomePage/FocusSection'
import InstagramSection from '../components/HomePage/InstagramSection'
import MediaSection from '../components/HomePage/MediaSection'
import ContactForm from '../components/ContactForm'

export default function Home () {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <FeaturedOnSection />
      <FocusSection />
      <InstagramSection />
      <MediaSection />
      <ContactForm />
    </Layout>
  )
}
