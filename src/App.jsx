import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'

function App() {
  const [count, setCount] = useState(0)


  function Search() {
    return <h1 className="text-white text-3xl p-5">Search Page</h1>
  }

  function WatchList() {
    return <h1 className="text-white text-3xl p-5">Watch List Page</h1>
  }

  function Originals() {
    return <h1 className="text-white text-3xl p-5">Originals Page</h1>
  }

  function Series() {
    return <h1 className="text-white text-3xl p-5">Series Page</h1>
  }


  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/search' element = {<Search/>} />
          <Route path = '/watchlist' element = {<WatchList/>} />
          <Route path = '/originals' element = {<Originals/>} />
          <Route path = '/movies' element = {<Movies/>} />
          <Route path = '/series' element = {<Series/>} />
          <Route path = '/movie/:id' element = {<MovieDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
