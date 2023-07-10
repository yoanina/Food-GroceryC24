import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Banner = () => {

  const data = [
    "https://media.istockphoto.com/id/1135598244/es/vector/gente-haciendo-compras-de-comestibles-usando-aplicaciones-de-ar.jpg?s=612x612&w=0&k=20&c=qouYmHh8a9c91Yp5IY-kV_eh3UXseenqRVyQjuOJ8zA=",
    "https://media.istockphoto.com/id/1135598244/es/vector/gente-haciendo-compras-de-comestibles-usando-aplicaciones-de-ar.jpg?s=612x612&w=0&k=20&c=qouYmHh8a9c91Yp5IY-kV_eh3UXseenqRVyQjuOJ8zA=",
    "https://media.istockphoto.com/id/1135598244/es/vector/gente-haciendo-compras-de-comestibles-usando-aplicaciones-de-ar.jpg?s=612x612&w=0&k=20&c=qouYmHh8a9c91Yp5IY-kV_eh3UXseenqRVyQjuOJ8zA=",
    "https://media.istockphoto.com/id/1135598244/es/vector/gente-haciendo-compras-de-comestibles-usando-aplicaciones-de-ar.jpg?s=612x612&w=0&k=20&c=qouYmHh8a9c91Yp5IY-kV_eh3UXseenqRVyQjuOJ8zA="
  ]

  const [currSlide, setCurrSlide] = useState(0)

  const prevSlide = ()=>{
    setCurrSlide(currSlide === 0 ? 3: currSlide-1 )
  }

  const nextSlide =()=>{
    setCurrSlide(currSlide === 3? 0: currSlide+1)
  }

  return (
    <div className='w-full h-auto overflow-x-hidden bottom-5'>
      <div className='w-screen'>
        <div style={{transform:`translate(-${currSlide * 100}vw)`}} 
          className='w-[400vw] h-full flex transition-transform duration-1000'>
          <img className='w-screen h-full object-cover' loading='priority'  src={'/img/FOOD & GROCERY-4.png'} alt=''/>
          <img className='w-screen h-full object-cover'  src={'/img/FOOD & GROCERY-6.png'} alt=''/>
          <img className='w-screen h-full object-cover'  src={'/img/FOOD & GROCERY-5.png'} alt=''/>
          <img className='w-screen h-full object-cover'  src={'/img/FOOD & GROCERY-7.png'} alt=''/>
        </div>

        <div className='absolute bottom-80 left-0 right-0 w-fit mx-auto flex gap-8  '>
          <div onClick={prevSlide} className='w-14 h-12 border-[2px]  flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300' style={{  borderRadius:10,opacity:0.3, borderColor:'black'}}> 
            <ArrowBackIcon/>
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[2px]  flex items-center justify-center
          hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300' style={{ borderRadius:10,opacity:0.3, borderColor:'black' }}> 
            <ArrowForwardIcon/>
          </div>
        </div>
      </div>      
    </div>
  )
}
