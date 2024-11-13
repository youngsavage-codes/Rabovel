import Link from 'next/link'
import React from 'react'
import { Github, Linkedin, Facebook, Send } from 'lucide-react'; // Import Lucid icons
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footers = () => {
  return (
    <div className='text-white bg-[#020415]'>
        <div className='lg:max-w-[1200px] mx-auto'>
            <div className='border-t border-[#171443] py-20 lg:flex items-start justify-between gap-5 space-y-10 px-10 lg:px-0'>
                <div className='space-y-5 lg:w-[285px]'>
                    <img src="/images/logo.png" alt="" />
                    <p className='text-[#919DA4] text-[16px]'>Cryptocurrencies are used prim outside existing banking govern institutions hanged</p>
                    <div className='flex gap-5 items-center'>
                        <div className='bg-[#141227] p-3 rounded-full'>
                            <Github size={15}/>
                        </div>
                        <div className='bg-[#141227] p-3 rounded-full'>
                            <Linkedin size={15}/>
                        </div>
                        <div className='bg-[#141227] p-3 rounded-full'>
                            <Facebook size={15}/>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[285px]'>
                    <h2 className="text-[20px]">Catagories</h2>
                    <ul className="space-y-3">
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> What is ICO</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Tokens</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Road Map</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Advisor</Link></li>
                    </ul>
                </div>
                <div className='space-y-5 lg:w-[285px]'>
                    <h2 className="text-[20px]">Useful Links</h2>
                    <ul className="space-y-3">
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Payment & TAX</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Terms of Services</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> My Account</Link></li>
                        <li><Link href={''} className="text-[15px] hover:text-[#745CEC] ease-in-out transition-all duration-150 flex items-center gap-3"><div className='w-4 h-[1px] bg-[#745CEC]'></div> Return Policy</Link></li>
                    </ul>
                </div>
                <div className='space-y-5 lg:w-[285px]'>
                    <h2 className="text-[20px]">Newsletter</h2>
                    <p className='text-[#919DA4] text-[16px]'>Get now free 20% discount for all products on your first order</p>
                    <div className='flex gap-5 items-center bg-[#141227] rounded-full p-3'>
                        <Input className='border-none' placeholder='Enter E-Main'/>
                        <Button className='bg-[#745CEC] rounded-full'>
                            <Send />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:justify-between py-10 border-t border-[#171443]'>
                <p className='text-center'>© Cryptobit all Rights Reserved. By <Link href="" className='text-[#745CEC]'>Dream-IT</Link></p>
                <ul className='flex items-center justify-center lg:justify-end gap-10'>
                    <li className='list-disc'><Link href="/privacy" className=''>Privacy Policy</Link></li>
                    <li className='list-disc'><Link href="/terms" className=''>Terms & Condition</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footers