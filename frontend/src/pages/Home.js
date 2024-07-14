import React from 'react'
import Hero from './homepage/Hero';
import Process from './homepage/Process';
import Stats from './homepage/Stats';
import WhoAreWe from './homepage/WhoAreWe';
import Testimonials from './homepage/Testimonials';
import Spotlight from './homepage/Spotlight';
import NextStep from './homepage/NextStep';

const Home = () => {
  return (
    <main className=''>
      <Hero />
      <Process />
      <Stats />
      <WhoAreWe />
      <Testimonials />
      <Spotlight />
      <NextStep />
    </main>
  )
}

export default Home
