import React from "react";


function Home({movies}){
   const imgApi="https://image.tmdb.org/t/p/w500/"
      return(
            <div className="movies">
                {movies.map(movie=>{
                return (
                    <div className="movieList" key ={movie.id}>
                        <img className="moviesImage" src ={imgApi+movie.poster_path} alt="movie" /> 
                        <div className="movie-info">
                            <h1>{movie.title}</h1> 
                            <p>{movie.release_date}</p>
                        </div>
                    </div>
                )
                })};   
            </div>
    )
}

export default Home;