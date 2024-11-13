'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { buttonVariants } from '../ui/button'
import { usePathname } from 'next/navigation'
import { links } from '@/data/data'
import { Menu } from 'lucide-react'
import { Mobile } from './mobile'

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const path = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div 
            className={`fixed top-0 left-0 w-full z-50 px-10 lg:px-0 transition-colors duration-300 ${
                scrollPosition > 80 ? 'bg-[#020415]' : 'bg-transparent'
            }`}
        >
            <div className='max-w-[1200px] mx-auto flex items-center justify-between py-5 text-white'>
                <img src="/images/logo.png" alt="logo" className='w-32' />
                <nav>
                    <ul className='hidden lg:flex items-center justify-between gap-10'>
                        {links.map((route, index) => (
                            <li key={index}>
                                <Link 
                                    href={route.route} 
                                    className={`hover:text-[#745CEC] transition delay-150 ease-in-out ${path === route.route ? 'text-[#745CEC]' : ''}`}
                                >
                                    {route.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="" className={`text-white bg-transparent ${buttonVariants({ variant: "outline" })}`}>Join Now</Link>                   
                        </li>
                    </ul>
                </nav>
                <div className='lg:hidden'>
                    <Mobile />
                </div>
            </div>
        </div>
    )
}

export default Header
