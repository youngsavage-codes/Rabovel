import React from 'react'
import Market from './market'

const Coins = () => {
  return (
    <div className="text-white bg-[#020415]">
        <div className="max-w-[1200px] mx-auto py-20 px-5 lg:px-0">
            <div className='flex items-center gap-3'>
                <h5 className='uppercase text-[#745CEC] text-[18px]'>Market</h5>
                <img src="/images/about-1.png" alt="logo" />
            </div>
            <h2 className='text-[26px] lg:text-[40px] mt-2 mb-14'>Current Market</h2>
            <Market />
        </div>
    </div>
  )
}

export default Coins