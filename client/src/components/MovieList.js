import React from "react";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  let moviesData = JSON.parse(localStorage.getItem("movies"));
  const movie = moviesData.map((movie) => {
    return (
      <MovieCard
        title={movie.title}
        image={movie.poster_path}
        date={movie.release_date}
        id={movie.id}
        overview={movie.overview}
      />
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-columns">{movie} </div>
        </div>
      </div>
    </div>
  );

  //If the movies are undefined or if the user somehow makes it this far without submiting the form
  //the the user back to the homepage to fill out the form
  // return (
  //   <h2 className="ui container ui big red label">
  //     <Redirect to="/" />
  //   </h2>
  // );
};

export default MovieList;
