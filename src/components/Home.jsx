import React from 'react'
import Slider from './Slider'
import ProductionHouse from './ProductionHouse'
import GenreMovieList from './GenreMovieList'

export default function Home() {
  return (
    <div>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
    </div>
  )
}
