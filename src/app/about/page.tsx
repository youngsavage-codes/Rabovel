import AboutDetails from '@/components/about/about'
import Counts from '@/components/about/counts'
import Features from '@/components/about/features'
import Partners from '@/components/about/partners'
import Skills from '@/components/about/skills'
import React from 'react'

const About = () => {
  return (
    <div className='text-white'>
        <div className='text-center py-32 about-area'>
            <h2 className='text-[40px]'>About Us</h2>
            <h5 className='text-[20px]'><span className='text-[#745CEC]'>Home</span> - About us</h5>
        </div>
        <div>
            <AboutDetails />
            <Partners />
            <Features />
            <Skills />
            <Counts />
        </div>
    </div>
  )
}

export default About