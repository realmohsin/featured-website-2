import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import AboutHeroSection from '../components/AboutPage/AboutHeroSection'
import AboutSection from '../components/AboutPage/AboutSection'
import TeamSection from '../components/AboutPage/TeamSection'
import ReviewsSection from '../components/AboutPage/ReviewsSection'

export default function AboutPage () {
  return (
    <Layout>
      <AboutHeroSection />
      <AboutSection />
      <TeamSection />
      <ReviewsSection />
      <Footer />
    </Layout>
  )
}
