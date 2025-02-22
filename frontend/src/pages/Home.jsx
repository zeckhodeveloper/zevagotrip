import React from 'react'
import Navbar from '../components/Navbar'
import Bg_image from '../assets/home_bg.jpg'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${Bg_image})`}} className='h-screen bg-no-repeat bg-cover'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home