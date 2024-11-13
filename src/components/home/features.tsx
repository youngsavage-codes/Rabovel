import React from 'react'

const Card = ({ image, title, desc }: any) => (
    <div className="p-10 bg-[rgba(16,16,42,0.5)] rounded-lg overflow-hidden relative transition-all duration-500 group">
        {/* Background Image on hover */}
        <div
            className="absolute inset-0 w-full h-full bg-[url('/images/service.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 opacity-0 group-hover:opacity-100 z-0"
        ></div>

        <div className='relative z-10 bg-[#1B1F39] rounded-full mx-auto w-[70px] h-[70px] flex items-center justify-center group-hover:bg-opacity-80'>
            <img src={image} alt="" className='mx-auto transform transition-transform duration-200 group-hover:scale-110' />
        </div>
        <h3 className='relative z-10 text-center text-[20px] mt-4 group-hover:text-[#745CEC]'>{title}</h3>
        <p className='relative z-10 text-center text-[16px] mt-2 text-[#919DA4] group-hover:text-white'>{desc}</p>
    </div>
)



const Features = () => {
  return (
    <div className='slider-area text-white'>
        <div className='max-w-[1200px] mx-auto py-20 px-5 lg:px-0'>
            <div className='flex items-center justify-center gap-3'>
                <img src="/images/about-1.png" alt="logo" className='transform scale-x-[-1]' />
                <h5 className='uppercase text-[#745CEC] text-[18px]'>Features</h5>
                <img src="/images/about-1.png" alt="logo" />
            </div>
            <h2 className='text-[26px] lg:text-[40px] text-center mt-2 mb-10'>We Take Care Quality</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Card image="/images/icons-img.png" title="Best Trading Platform" desc="Cryptography, encryption process referred to as plaintexts tailers are before best services."/>
                <Card image="/images/icon-2.png" title="Comportable System" desc="Cryptography, encryption process referred to as plaintexts tailers are before best services."/>
                <Card image="/images/ico-img.png" title="Trusted Security" desc="Cryptography, encryption process referred to as plaintexts tailers are before best services."/>
            </div>
        </div>
    </div>
  )
}

export default Features