import React from 'react'
import { Link } from 'react-router-dom'
const Image_Base_Url = import.meta.env.VITE_TMDB_IMAGE_URL

export default function MovieCard({ movies }) {
  return (
    <Link to = {`/movie/${movies.id}`}>
      <div className='hover:border hover:border-gray-400 hover:rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 flex items-center'>
        <img src={Image_Base_Url + movies.poster_path} className='rounded-md ' />
      </div>
    </Link>
  )
}
