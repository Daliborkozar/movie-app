import React from "react";
import './Movie.css'

const API_IMAGE = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
  if(vote>=7){
    return 'green'
  }else if(vote >=5){
    return 'orange'
  } else {
    return 'red'
  }
} 


const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
      <div className='movie-content'>
        <img src={API_IMAGE + poster_path} alt={title} />
        
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`votecolor ${setVoteClass(vote_average)}`} >{vote_average}</span>
      </div>
      <div className='movie-overview'>
          <h2>Overview:</h2>
          <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
