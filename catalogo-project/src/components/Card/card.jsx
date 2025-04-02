import React from "react";


export function Card({ movie }){
    return(
        <div className='container'>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <p/>
            <p>{movie.overview}</p>
        </div>
    );
 
}