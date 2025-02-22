import React from 'react'
import image1 from '../assets/A.jpg'
import image2 from '../assets/B.jpg'
import image3 from '../assets/C.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
    const places = [
        {
            img:image1,
            name:'Bengalore'
        },
        {
            img:image2,
            name:'India Gate'
        },
        {
            img:image3,
            name:'Taj Mahal'
        },
    ]
  return (
    <div>
        <div className='flex flex-col py-3 gap-3'>
            <div className='flex flex-col justify-center  text-white sm:mt-20 p-8 w-full items-center h-full gap-10'>
                <p className='font-extrabold text-3xl sm:text-[100px] uppercase'><span className='sm:text-[150px] text-blue-500'>p</span>ondicherr<span className='sm:text-[140px] text-blue-500'>y</span></p>
                <p className='text-justify sm:w-[650px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam corrupti vitae fugit in. Officiis facere, illum doloribus suscipit quae nesciunt, animi aspernatur qui aperiam impedit optio dignissimos molestiae obcaecati.</p>
                <button className='bg-blue-500 text-white rounded py-2 px-3 font-medium text-lg w-[200px] mt-3 sm:mt-0 '>EXPLORE</button>
            </div>
            <div className='p-8 flex items-center justify-center'>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 gap-y-6'>
                    {
                        places.map((place)=>(
                            <Link className='cursor-pointer' to=''>
                                <div className='overflow-hidden rounded-lg '>
                                    <img src={place.img} className='hover:scale-110  transition ease-in-out w-[400px]'/>
                                    <p className=' text-white py-4 uppercase font-medium'>{place.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero