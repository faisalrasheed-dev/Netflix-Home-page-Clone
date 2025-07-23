import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import instance from "../Constants/axios";
import { imageUrl } from '../Constants/constants';
import './RowPost.css';
function RowPost({title,isSmall,url}) {
  const [movie,setMovie]=useState([])
  const [ytid,setYtid]=useState('')
  useEffect(() => {instance.get(url).then((response)=>{
    
    setMovie(response.data.results)
    
  })
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
const handleMovie=(id)=>{
   instance.get(`/movie/${id}/videos?`).then(response=>{
    const video=response.data.results
    const youtubeVideo=video.find((video)=>video.site==="YouTube"&&video.type==="Trailer");
    if (youtubeVideo) {
      console.log("Video found:", youtubeVideo); // debug
      setYtid(youtubeVideo.key); // only store the key, not whole object
    } else {
      console.log("No YouTube trailer found for this movie.");
      setYtid('');
    }
  })
  
}
  
  return (
    <div className='row'>
        <h2 className={isSmall ? "small-title" : "title"}>{title}</h2>
        <div className="posters">
          {movie.map((obj,index)=>
            <img onClick={()=>handleMovie(obj.id)}
            key={index}
            src={imageUrl + obj.backdrop_path}
            alt="Movie Poster"
            className={isSmall ? 'small_posters' : 'poster'}
          />
          )}
        </div>
        {ytid && <YouTube opts={opts} videoId={ytid}/>} 


    </div>
  )
}

export default RowPost