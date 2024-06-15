"use client"
import Link from 'next/link'
import React from 'react'
import navbarItems from '../menu'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const Navbar = () => {
    const navitem = "font-semibold text-[16px] text-[#C1F2B0] transition-all ease-in-out delay-150 duration-75 hover:text-[#65B741] hover:py-[8px]  hover:border-b-2 hover:border-[#65B741]"
    const navitemactive = "font-semibold text-[16px] text-[#65B741] py-[8px] border-b-2 border-[#65B741]" 
    const pathName = usePathname()
  return (
    <div className="px-[128px] items-center shadow flex justify-between py-[16px]">
        <div className=""> 
            <Image src={'/logo-mokcup.png'} width={75} height={75} alt='Logo'  />
        </div>
        <div className="flex items-center gap-[64px]">
            <ul className='flex gap-[32px] align-middle items-center'>
                {navbarItems.map((val, index) => (
                    <li className={pathName == val.url ? navitemactive : navitem}><Link href={val.url}>{val.label}</Link></li>
                ))} 
            </ul>
            
            <div className="flex items-center"><button className='h-fit flex gap-2 rounded-lg items-center px-2 py-4 bg-[#9BCF53]'><iconify-icon class="text-[#FFFFFF] text-[16px]" icon="ic:baseline-email"></iconify-icon> <span className='text-[#FFFFFF] text-[12px] font-semibold '>cvhidropolik@gmail.com</span> </button></div>
        </div>
    </div>
  )
}

export default Navbar