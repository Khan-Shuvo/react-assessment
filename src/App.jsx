import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import Series from './components/Series'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/movies' element = {<Movies/>} />
          <Route path = '/series' element = {<Series/>} />
          <Route path = '/:type/:id' element = {<MovieDetails/>} />
          <Route path = '/search' element = {<SearchPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
