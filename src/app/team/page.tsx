import Skills from '@/components/about/skills'
import Team from '@/components/home/team'
import React from 'react'

const Teams = () => {
  return (
    <div className='text-white'>
        <div className='text-center py-32 about-area'>
            <h2 className='text-[40px]'>Meet Our Team</h2>
            <h5 className='text-[20px]'><span className='text-[#745CEC]'>Home</span> - Our Team</h5>
        </div>
        <Team />
        <Skills />
    </div>
  )
}

export default Teams