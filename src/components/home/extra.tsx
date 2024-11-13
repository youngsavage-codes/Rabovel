import Link from 'next/link'
import React from 'react'

const Card = ({image, title, desc}: any) => (
    <div className='lg:flex items-start gap-5 bg-[#141227] p-5 lg:p-10 rounded-lg'>
        <div className='relative z-10 bg-[#1B1F39] lg:bg-transparent rounded-full w-[70px] h-[70px] flex items-center justify-center group-hover:bg-opacity-80'>
            <img src={image} alt="" className='mx-auto transform transition-transform duration-200 group-hover:scale-110' />
        </div>
        <div className='space-y-5'>
            <h2 className="text-[16px] md:text-[20px] lg:text-[24px] mt-5 lg:mt-0">{title}</h2>
            <p className="text-[14px] md:text-[16px] text-[#919DA4]">{desc}</p>
            <div><Link href="" className='text-[#745CEC]'>Read More</Link></div>
        </div>
    </div>
)

const Extra = () => {
  return (
    <div className='bg-[#020415] text-white'>
        <div className='lg:max-w-[1200px] mx-auto py-20 grid md:grid-cols-2 gap-10 px-5 lg:px-0'>
            <Card 
                image="/images/Services_1.png" 
                title="NFT Development" 
                desc="
                    Progressively predominate performance based sources before high standards in architectures.transparent functionalities via efficient ROI.extensive partnerships.
                "/>
            <Card 
                image="/images/Services_2.png" 
                title="Secure Payment" 
                desc="
                    Progressively predominate performance based sources before high standards in architectures.transparent functionalities via efficient ROI.extensive partnerships.
                "/>
            <Card 
                image="/images/Services-1.png" 
                title="Universal Access" 
                desc="
                    Progressively predominate performance based sources before high standards in architectures.transparent functionalities via efficient ROI.extensive partnerships.
                "/>
            <Card 
                image="/images/Services_1.png" 
                title="Universal Access" 
                desc="
                    Progressively predominate performance based sources before high standards in architectures.transparent functionalities via efficient ROI.extensive partnerships.
                "/>
        </div>
    </div>
  )
}

export default Extra