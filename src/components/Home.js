import React from "react";


function Home({movies}){
   const imgApi="https://image.tmdb.org/t/p/w500/"
      return(
          <div className="movies">
             {movies.map(movie=>{
              return <div className="movie-list" key ={movie.id}>
                    <img className="movies" src ={imgApi+movie.poster_path} alt="" /> 
                    <div className="movie-info">
                        <h1>{movie.title}</h1> 
                        <span>{movie.release_date}</span>
                     </div>
                 </div>
            })}    
      </div>
    )
}

export default Home;