import Contact from '@/components/home/contact'
import React from 'react'

const ContactUs = () => {
  return (
    <div className="text-white">
        <div className='text-center py-32 about-area'>
            <h2 className='text-[40px]'>Contact Us</h2>
            <h5 className='text-[20px]'><span className='text-[#745CEC]'>Home</span> - Contact Us</h5>
        </div>
        <Contact />
    </div>
  )
}

export default ContactUs