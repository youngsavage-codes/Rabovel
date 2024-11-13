import React from 'react'

const Counts = () => {
  return (
    <div className='about-count text-white'>
        <div className='lg:max-w-[1200px] mx-auto py-20 lg:py-24 grid md:grid-cols-2 lg:grid-cols-4 text-center space-y-5'>
            <div>
                <h2 className='text-[30px] lg:text-[40px] text-[#745CEC]'>$38.98M+</h2>
                <h6>Digital Products</h6>
            </div>
            <div>
                <h2 className='text-[30px] lg:text-[40px] text-[#745CEC]'>680K+</h2>
                <h6>Happy Active Users</h6>
            </div>
            <div>
                <h2 className='text-[30px] lg:text-[40px] text-[#745CEC]'>$380M+</h2>
                <h6>Transections Done</h6>
            </div>
            <div>
                <h2 className='text-[30px] lg:text-[40px] text-[#745CEC]'>150K+</h2>
                <h6>Community BTC</h6>
            </div>
        </div>
    </div>
  )
}

export default Counts