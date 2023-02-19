import React from 'react'
import './../style.css';
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom';


const MovieCard = ({ el }) => {
  return (
    <>
      <Link  to={"/movie/details"} state={el} className='MovieBox'>
        <div className='postercontainer'>
          <img src={el.posterurl} alt='poster' />


        </div>
        <h4>{el.name}</h4>
        <ReactStars
          className='stars'
          edit={false}
          count={5}
          value={el.rating}
          color2={'#ffd700'} />
      </Link>

    </>
  )
}

export default MovieCard