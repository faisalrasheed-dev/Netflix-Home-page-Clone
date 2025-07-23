import React, { useEffect, useState } from 'react';
import instance from "../Constants/axios";
import { imageUrl } from '../Constants/constants';
import { trending } from '../Url/url';
import './Banner.css';
function Banner() {
  const [movie,setMovie]=useState(null)
  useEffect(() => {instance.get(`${trending}`).then((response)=>{
    const results = response.data.results;
    if(results && results.length>0)
    {const randomIndex = Math.floor(Math.random() * results.length);
      setMovie(results[randomIndex]);
    
    }
  }).catch((error) => {
    console.error("Error fetching movies:", error);
  });
  },[])
  
  return (
      
    <div className="banner" style={{backgroundImage:movie?`url(${imageUrl+movie.backdrop_path})`:""}}>
      
        <div className="content">
            <h1 className="title">{ (movie?.name||movie?.title|| 'Untitled')}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1  className="description">{movie?.overview?.substring(0, 250) || 'No description available'}{movie?.overview?.length > 250 && '...'}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner