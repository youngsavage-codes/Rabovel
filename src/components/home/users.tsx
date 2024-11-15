import React from 'react'
import { Button } from '../ui/button'

const Users = () => {
  return (
    <div className='text-white bg-[#020415]'>
      <div className='w-full lg:max-w-[1200px] mx-auto space-y-10 py-20 px-5 lg:flex gap-10 items-center'>
        <img src="/images/crypto-3 (1).png" alt="logo" className="w-[540px] float-animation"/>
        <div className="w-full lg:w-[540px] space-y-5">
          <div className='flex items-center gap-3'>
            <h5 className='uppercase text-[#745CEC] text-[18px]'>Users</h5>
            <img src="/images/about-1.png" alt="logo" />
          </div>
          <h2 className='text-[30px] lg:text-[40px]'>Our best users all over the World Coverages</h2>
          <p className='text-[14px] md:text-[16px] text-[#919DA4]'>Credibly streamline premium innovation and client-focused the. Intrinsicly integrate end-to-end synergy whereas low-risk highs sources phosfluorescently.</p>
          <ul className='grid lg:grid-cols-2 gap-5'>
            <li className='flex gap-3 items-center'>
              <img src="/images/about.png" alt="" />
              <p>Binance Smart Chain</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/images/about.png" alt="" />
              <p>Exchange Money</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/images/about.png" alt="" />
              <p>Coin Entherium</p>
            </li>
            <li className='flex gap-3 items-center'>
              <img src="/images/about.png" alt="" />
              <p>OKEX Block Chain</p>
            </li>
          </ul>
          <Button className='bg-[#745CEC] text-sm lg:text-lg p-5 lg:p-8 rounded-full'>Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default Users;
