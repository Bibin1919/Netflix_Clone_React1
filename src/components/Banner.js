import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../request'
import instance from '../instanceConfig'


function Banner() {

    const [movie,setMovies] = useState([])
    const base_url = 'https://image.tmdb.org/t/p/original/';

    const fetchData = async()=>{
        const response = await instance.get(requests.fetchNetflixOriginals)
        const {results} = response.data
        setMovies(results[
            Math.floor(Math.random()*results.length)
        ]);
    }
    useEffect(()=>{
        fetchData()
    },[])

console.log(movie);

  return (
    <div className='banner'
       style={{
        backgroundImage:`url(${base_url}/${movie.backdrop_path})`,
        backgroundSize:'cover'
       }}
       >
        <div className='banner_text'>
          <h1 className='banner_title'>{movie.name}</h1>
          <h2 className='banner_overview'>{movie.overview}</h2>

        </div>
    </div>
  )
}

export default Banner