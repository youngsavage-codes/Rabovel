import React from 'react'
import { Button } from '../ui/button'

const Explore = () => {
  return (
    <div className='bg-[#020415] text-white'>
        <div className='lg:max-w-[1200px] mx-auto py-10 lg:flex items-center gap-10 px-10 lg:px-0 space-y-10 lg:space-y-0'>
            <div className="lg:w-[540px] space-y-5">
                <h2 className='text-[30px] lg:text-[42px] font-light'>Explore the Next Crypto Ready to Selling</h2>
                <p className='text-[16px] text-[#919DA4]'>Credibly streamline premium innovation and client-focused the. Intrinsicly integrate end-to-end synergy whereas.</p>
                <Button className='bg-[#745CEC] text-lg p-8 rounded-full'>Get Started Now</Button>
            </div>
            <img src="/images/crypto-6.png" alt="" className="w-[400px] space-y-5"/>
        </div>
    </div>
  )
}

export default Explore