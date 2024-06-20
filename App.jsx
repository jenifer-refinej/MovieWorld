import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import searchIcon from './assets/search.svg'
import MovieCard from './MovieCard';


const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=a36d2049";

const movie1 = {}
const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setsearchTerm] = useState('')
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovie("Spiderman")
  }, [])
  return (
    <div className="app">
      <h1>MovieWorld</h1>

      <div className="search">
        <input type="text"
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="searchimage" onClick={() => searchMovie(searchTerm)} />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (

              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
  )
}

export default App;

