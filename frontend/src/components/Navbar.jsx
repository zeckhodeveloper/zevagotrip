import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/zivagotrip_logo.png'
import menu_icon from '../assets/menu_icon.png'
import dropDownIcon from '../assets/dropdown_icon.png'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
  return (
    <div className='flex items-center justify-between py-5 px-8 font-medium'>
        <Link>
        <img src={Logo} className='w-36 sm:w-52'/>
        </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-white'>
            <NavLink to='/' className='flex flex-col items-center gap-1 uppercase'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[2px] bg-white hidden' />
            </NavLink>
            <NavLink to='/destination' className='flex flex-col items-center gap-1 uppercase'>
                <p>Destination</p>
                <hr className='w-2/4 border-none h-[2px] bg-white hidden' />
            </NavLink>
            <NavLink to='/travelguide' className='flex flex-col items-center gap-1 uppercase'>
                <p>travel guide</p>
                <hr className='w-2/4 border-none h-[2px] bg-white hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 uppercase'>
                <p>contact</p>
                <hr className='w-2/4 border-none h-[2px] bg-white hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 uppercase'>
                <p>about</p>
                <hr className='w-2/4 border-none h-[2px] bg-white hidden' />
            </NavLink>

        </ul>
        <img onClick={()=>setVisible(true)} src={menu_icon} className='w-5 cursor-pointer  sm:hidden'/>

        {/* Slider menu for smaller screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' :'w-0'}`}>
            <div className='flex flex-col text-gray-700'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                        <img src={dropDownIcon} className='h-4 rotate-180' />
                        <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/destination'>DESTINATION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/travelguide'>TRAVEL GUIDE</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/contact'>CONTACT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6' to='/about'>ABOUT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar