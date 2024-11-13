import Coins from '@/components/home/coins'
import Contact from '@/components/home/contact'
import Explore from '@/components/home/explore'
import Extra from '@/components/home/extra'
import Features from '@/components/home/features'
import LandingPage from '@/components/home/landingpage'
import Team from '@/components/home/team'
import Testimonial from '@/components/home/testimonial'
import Users from '@/components/home/users'
import React from 'react'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <Users />
        <Features />
        <Team />
        <Coins />
        <Extra />
        <Testimonial />
        <Explore />
        <Contact />
    </div>
  )
}

export default Home