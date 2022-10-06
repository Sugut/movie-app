import React from "react";

function MovieList({movies}){
    
    return(
        <div>
            {/* {collection of all movies} */}
            {movies.map(movie=>{
               return <div key ={movie.id} title={movie.title} image={movie.image} releaseDate={movie.releaseDate}></div>
            })}
        </div>
    )
}

export default MovieList;