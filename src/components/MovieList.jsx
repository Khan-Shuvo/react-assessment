import React, { useEffect, useState } from 'react'
import { getMovieByGenreId } from '../api/tmdb'
import MovieCard from './MovieCard';

export default function MovieList({genreId}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
         async function fetchMoviesById() {
            try{
                const data = await getMovieByGenreId(genreId);
                // console.log(data)
                setMovies(data.results)
            } catch (error){
                console.log(error)
            }

            
         };
         fetchMoviesById()
    },[genreId])

  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 cursor-pointer rounded-md '>
        {movies.map((item, index) => index <10 &&( 
            <MovieCard movies = {item}/>)
        )}
    </div>
  )
}
