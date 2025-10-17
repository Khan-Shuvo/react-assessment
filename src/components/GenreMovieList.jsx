import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

export default function
    () {
    return (
        <div>
            {GenresList.genere.map((item, index) => index<=4&& (
                <div className='px-8 md:p-10'>
                    <h2 className='text-[20px] md:text-3xl text-white font-bold py-3'>{item.name}</h2>
                    <MovieList genreId={item.id}/>
                </div>
            )) }
        </div>
    )
}
