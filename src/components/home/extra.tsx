import Link from 'next/link'
import React from 'react'

const Card = ({image, title, desc}: any) => (
    <div className='lg:flex items-start gap-5 bg-[#141227] p-10 rounded-lg'>
        <div className='bg-[#1F2544] w-fit p-5 lg:p-7 flex items-center justify-center rounded-full'>
            <img src={image} alt="" className='lg:w-32'/>
        </div>
        <div className='space-y-5'>
            <h2 className="text-[24px] mt-5 lg:mt-0">{title}</h2>
            <p className="text-[16px] text-[#919DA4]">{desc}</p>
            <div><Link href="" className='text-[#745CEC]'>Read More</Link></div>
        </div>
    </div>
)

const Extra = () => {
  return (
    <div className='bg-[#020415] text-white'>
        <div className='lg:max-w-[1200px] mx-auto py-20 grid lg:grid-cols-2 gap-10 px-10 lg:px-0'>
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