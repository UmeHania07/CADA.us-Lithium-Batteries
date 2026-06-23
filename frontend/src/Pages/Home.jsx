import React from 'react'
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import Contact from './Contact';
import StatsSection from '../components/StatesSection';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <StatsSection />
      <OurPolicy />
      <Contact />
      <Reviews />
    </div>
  )
}

export default Home