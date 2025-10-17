import React from 'react'
import disney_img from '../assets/Images/disney.png'
import marvel_img from '../assets/Images/marvel.png'
import nationalG_img from '../assets/Images/nationalG.png'
import pixar_img from '../assets/Images/pixar.png'
import starwar_img from '../assets/Images/starwar.png'

import starwar_video from '../assets/Videos/star-wars.mp4'
import disney_video from '../assets/Videos/disney.mp4'
import marvel_video from '../assets/Videos/marvel.mp4'
import nationalGeographic_video from '../assets/Videos/national-geographic.mp4'
import pixar_video from '../assets/Videos/pixar.mp4'

export default function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney_img,
      video: disney_video
    },
    {
      id: 2,
      image: pixar_img,
      video: pixar_video
    },
    {
      id: 3,
      image: marvel_img,
      video: marvel_video
    },
    {
      id: 4,
      image: starwar_img,
      video: starwar_video
    },
    {
      id: 5,
      image: nationalG_img,
      video: nationalGeographic_video
    },

  ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-2 md:px-16'>
      {productionHouseList.map(item => (
        <div className='border-[2px] border-r-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
          <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50 '/>
          <img src= {item.image} className='w-full z-[1] opacity-100 ' />
        </div>
      ))}
    </div>
  )
}
