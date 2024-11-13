import React from 'react'

const Card = ({image, title, desc}: any) => (
    <div className="space-y-5">
        <div className="w-[80px] h-[80px] rounded-full bg-[#141227] flex items-center justify-center">
            <img src={image} alt="" />
        </div>
        <h2 className="text-[20px]">{title}</h2>
        <p className="text-[16px] text-[#919DA4]">{desc}</p>
    </div>
)

const Features = () => {
  return (
    <div className='text-white bg-[#020415]'>
        <div className='max-w-[1200px] mx-auto py-20 px-10 lg:px-0 border-b border-[#171443]'>
            <div className='flex items-center justify-center gap-3'>
                <img src="/images/about-1.png" alt="logo" className='transform scale-x-[-1]' />
                <h5 className='uppercase text-[#745CEC] text-[18px]'>Features</h5>
                <img src="/images/about-1.png" alt="logo" />
            </div>
            <h2 className='text-[30px] lg:text-[40px] text-center mt-2 mb-5'>Crypto Best Features</h2>
            <p className="text-center text-[16px] text-[#919DA4]">Cryptocurrencies are used primarily outside existing banking and coin <br /> governmental institutions and are exchanged</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                <Card image="/images/Services_1.png" title="Early Bonus Cash" desc="Professionally engineer customized scenari a-vis innovative interfaces. Synergistically ta sustainable infomediaries via multidiscipli web services uniquely."/>
                <Card image="/images/ico-img.png" title="Secure Payment" desc="Professionally engineer customized scenari a-vis innovative interfaces. Synergistically ta sustainable infomediaries via multidiscipli web services uniquely."/>
                <Card image="/images/About_6.png" title="Universal Access" desc="Professionally engineer customized scenari a-vis innovative interfaces. Synergistically ta sustainable infomediaries via multidiscipli web services uniquely."/>
            </div>
        </div>
    </div>
  )
}

export default Features