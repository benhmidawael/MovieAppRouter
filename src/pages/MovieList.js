import React,{ useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './../style.css';


import MovieCard from "../Component/MovieCard";

const MovieList = ({ search, movies, stars }) => {

  const location =useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  return (
    <>
      <div className='MainBox'>
        {(parseInt(stars) > 0) ? (movies.filter((el) => el.rating === parseInt(stars) && el.name.toUpperCase().includes(search.toUpperCase())).map((el) => <MovieCard el={el} />).reverse()) : (movies.filter((el) => el.name.toUpperCase().includes(search.toUpperCase())).map((el) => <MovieCard el={el} />).reverse())}

      </div>

    </>
  )
}

export default MovieList