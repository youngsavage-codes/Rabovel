import { Check } from 'lucide-react'
import React from 'react'

const AboutDetails = () => {
  return (
    <div className='text-white bg-[#020415]'>
        <div className='max-w-[1200px] mx-auto lg:flex gap-10 items-center py-20 px-5 lg:px-0 space-y-10 lg:space-y-0'>
            <img src="/images/crypto-3 (1).png" alt="logo" className="lg:w-[540px] float-animation"/>
            <div className="w-full lg:w-[540px] space-y-5">
                <div className='flex items-center gap-3'>
                    <h5 className='uppercase text-[#745CEC] text-[18px]'>about</h5>
                    <img src="/images/about-1.png" alt="logo" />
                </div>
                <h2 className='text-[26px] lg:text-[40px]'>We built Crypto platform to buy & sell shares.</h2>
                <p className='text-[16px] text-[#919DA4]'>Progressively predominate performance based internal or "orga sources before high standards in architectures. Interactively ini transparent functionalities via efficient ROI.</p>
                <ul className='space-y-5'>
                    <li className='flex gap-3 items-center'><Check size={15}/> Prioritize the features your customers need</li>
                    <li className='flex gap-3 items-center'><Check size={15}/> Align Everyone around the Roadmap</li>
                    <li className='flex gap-3 items-center'><Check size={15}/> Uniquely Empower Parallel Total Talents</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AboutDetails