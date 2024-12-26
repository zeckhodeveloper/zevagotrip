import React from 'react'
import { Link } from 'react-router-dom';

import HeaderImg from '../assets/header_bg.jpg'
import logo from '../assets/zivagotrip_logo.png'

const Header = () => {
  return (
    <div className='bg-cover bg-no-repeat h-screen pt-4'
        style={{backgroundImage: `url(${HeaderImg})`}}>
        <div className="flex justify-between items-center px-8">
            <img src={logo} alt="zivagotrip logo" />
            <div className="flex text-lg gap-10">
                <Link to='destination'>Destination</Link>
                <Link to='travel-guide'>Travel Guide</Link>
                <Link to='contact-us'>Contact Us</Link>
                <Link to='about-us'>About Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Header