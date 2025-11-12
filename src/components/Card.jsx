import React from 'react'
import { Link } from 'react-router-dom'
const Image_Base_Url = import.meta.env.VITE_TMDB_IMAGE_URL

export default function Card({ movies }) {

  const type = movies.title ? "movie" : "tv"
  return (
    <Link to={`/${type}/${movies.id}`}>
      <div className='hover:border hover:border-gray-400 hover:rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center'>
        <img src={Image_Base_Url + movies.poster_path} className='rounded-md ' />
      </div>
      <div className='flex gap-3 text-white m-4'>
        <h1>Title: </h1>
        <h3>{movies.title || movies.name}</h3>
      </div>
    </Link>
  )
}
