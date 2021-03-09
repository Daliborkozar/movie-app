import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
import './App.css'
import {debounce} from 'lodash'


const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ebc3d7dfb948195fc2c632a44a91345'
//const IMP_API = 'https://image.tmdb.org/t/p/w500/'
const SEARCH = 'https://api.themoviedb.org/3/search/movie?&api_key=7ebc3d7dfb948195fc2c632a44a91345&query='


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTern] = useState('')
  

  useEffect(()=> {
    const movieData = async() =>{
      const movieList = await fetch(MOVIE_API)
      const data = await movieList.json()
      
      setMovies(data.results)
    }
    
    movieData()
  },[])

  const handleOnChange = (e) => {
    setSearchTern(e.target.value)
  }


  
  const onSubHandler = (e) => {
    e.preventDefault()

    const searchData = async() =>{
      const movieSearch = await fetch(SEARCH+searchTerm)
      const data = await movieSearch.json()
      console.log(data.results)
      setMovies(data.results)
    }

    searchData()
    setSearchTern('')
  }

  


  return (
    <div className="App">
      <header>
        <form onSubmit={onSubHandler}>
          <input className='search'
          type='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleOnChange}
          />
        </form>
        
        </header>
      <div className='movie-container'>
     {movies.length > 0 && movies.map(movie => (
       <Movie key={movie.id} {...movie} />
     ))}
     </div>
    </div>
  );
}

export default App;
