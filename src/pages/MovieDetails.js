import './../style.css';

import React,{ useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'
import ReactStars from 'react-stars'



const MovieDetails = () => {
    const movie = useLocation().state;

    const location =useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
      
    return (
        <div className='MovieDetails'>
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <ReactStars
                className='starsdet'
                edit={false}
                count={5}
                value={movie.rating}
                color2={'#ffd700'} />

            <ReactPlayer
                className="miniplayer"
                width={"100%"}
                height={"100%"}
                loop={true}
                url={movie.trailerurl}
            />


        </div>
    )
}

export default MovieDetails