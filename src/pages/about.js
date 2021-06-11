import React from 'react'
import Layout from '../components/Layout'
import AboutHeroSection from '../components/AboutPage/AboutHeroSection'
import AboutSection from '../components/AboutPage/AboutSection'
import TeamSection from '../components/AboutPage/TeamSection'
import ReviewsSection from '../components/AboutPage/ReviewsSection'

export default function AboutPage ({ location }) {
  return (
    <Layout location={location}>
      <AboutHeroSection />
      <AboutSection />
      <TeamSection />
      <ReviewsSection />
    </Layout>
  )
}
