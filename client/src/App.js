import React, { useEffect, useState } from 'react';
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";
import logo from './logo.svg';
import './App.css';

function App() {
  const[movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
      })
  }, []);

  console.log(movies);

  return (
    <div className="App">
      <MovieForm onNewMovie={movie => {
        setMovies(currentMovies => [movie, ...currentMovies])}
        } />
      <Movies movies={movies} />
    </div>
  );
}

export default App;
