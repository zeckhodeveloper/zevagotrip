/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Destination from './pages/Destination'
import TravelGuide from './pages/TravelGuide'

const App = () => {
  return (
    <div className='text-inter'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='destination' element={<Destination />} />
        <Route path='travel-guide' element={<TravelGuide />} />
      </Routes>
    </div>
  )
}

export default App