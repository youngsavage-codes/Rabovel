import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const ContactForm = () => {
  return (
    <div className='bg-[#141227] p-7 rounded-lg'>
        <h2 className="text-[28px] mb-5">Get In Touch</h2>
        <div className="space-y-5">
            <div className='space-y-5'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <Input className='rounded-full p-7 border-[#171443]' placeholder='Name'/>
                    <Input className='rounded-full p-7 border-[#171443]' placeholder='Enter Email'/>
                </div>
                <Input className='rounded-full p-7 border-[#171443]' placeholder='Subject'/>
                <Textarea className='border-[#171443] rounded-2xl p-5 h-32' placeholder='Message'/>
            </div>
            <Button className='bg-[#745CEC] text-lg p-8 rounded-full'>Send Message</Button>
        </div>
    </div>
  )
}

export default ContactForm