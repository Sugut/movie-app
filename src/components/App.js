// import logo from './logo.svg';
import '../App.css';
import React,{useEffect, useState} from "react";
import Home from "./Home"
import { Navbar } from "./Navbar";
import { data } from 'autoprefixer';
import Search from './Search';

function App() {
  const[movies, setMovies]=useState([])
  const [search, setSearch]=useState([])
 
   useEffect(()=>{
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=1bb8166c24cb38120e165753855c0acc")
      .then(r=>  r.json())
      .then(data=> setMovies(data.results))
           console.log(data)
   },[])
  function onSearchChange(e){
    setSearch(e.target.value)
  }
  return (
    <div>
      <div className='search'>
          <Search search={search} onSearchChange={onSearchChange} setSearch={setSearch}/> 
      </div>
      <div className='navigate'>
        <Navbar />
      </div>
       <div className="movie-container">
          <Home movies={movies}/>       
       </div>
    </div>   
  );
}

export default App;
