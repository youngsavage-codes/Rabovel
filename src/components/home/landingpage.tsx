import React from 'react';
import { Button } from '../ui/button';

const LandingPage = () => {
  return (
    <div className='slider-area text-white'>
        <div className='w-full lg:max-w-[1200px] mx-auto lg:flex gap-10 items-center px-5 lg:px-0 pt-28 lg:pt-40 relative space-y-10'>
            <div className='space-y-5 w-full lg:w-[570px]'>
                <h2 className="text-[40px] lg:text-[56px]">The Best Trading Cryptocurrency Resource</h2>
                <p className='text-[16px] text-[#919DA4]'>Cryptography, encryption process of transforming information referred to as plaintext) using done.</p>
                <Button className='bg-[#745CEC] text-sm lg:text-lg p-5 lg:p-8 rounded-full'>Get Started Now</Button>
            </div>
            <img src="/images/crypto.png" alt="" className='hidden lg:block absolute top-32 left-96 rotate-slowly w-[100px]' />
            <div className=''>
                <img src="/images/crypto-2.png" alt="" className='' />
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
