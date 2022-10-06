// import logo from './logo.svg';
import '../App.css';
import React,{useEffect, useState} from "react";
import Home from "./Home"

import { Navbar } from "./Navbar";
import { data } from 'autoprefixer';

function App() {
  const[movies, setMovies]=useState([])
   useEffect(()=>{
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=1bb8166c24cb38120e165753855c0acc")
      .then(r=>  r.json())
      .then(data=> setMovies(data.results))
           console.log(data)
   },[])
  return (
    <div className="app">
       <Navbar/>
       <Home movies={movies}/>
    </div>
  );
}

export default App;
