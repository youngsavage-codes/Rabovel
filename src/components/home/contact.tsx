import React from 'react'
import ContactForm from './contactform'

const Card = ({title, address}: any) => (
  <div className='bg-[#141227] p-5 lg:p-10 flex rounded-lg'>
    <div>
      <h2 className='text-[16px] md:text-[20px] lg:text-[24px]'>{title}</h2>
      <p className='text-[14px] md:text-[16px] text-[#919DA4]'>{address}</p>
    </div>
  </div>
)

const Contact = () => {
  return (
    <div className='text-white bg-[#020415]'>
      <div className='max-w-[1200px] mx-auto py-20 px-5 lg:px-0'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
          <Card title="Address Ifno" address="3281 Steve Hunts, Market Florida, FL 33176"/>
          <Card title="Phone Calls" address="+98 (5784) 123 789"/>
          <Card title="E-Mail Address" address="yourmail@yahoo.com"/>
        </div>

        <div className="flex items-center justify-center gap-3 mt-20">
          <img src="/images/about-1.png" alt="logo" className="transform scale-x-[-1]" />
          <h5 className="uppercase text-[#745CEC] text-[18px]">contacts</h5>
          <img src="/images/about-1.png" alt="logo" />
        </div>
        <h2 className="text-[26px] lg:text-[40px] text-center mt-2 mb-10">Write Us Something</h2>
        <div className='grid lg:grid-cols-2 gap-10 items-center py-10'>
          <img src="/images/contact.png" alt="" />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact