import React from "react";
import { Redirect } from "react-router";
// import "../images/MovieList.css";
import MovieCard from "../components/MovieCard";

const MovieList = ({ movies }) => {
  if (movies !== undefined) {
    const movie = movies.map((movie) => {
      return (
        <MovieCard
          title={movie.title}
          image={movie.poster_path}
          date={movie.release_date}
          id={movie.id}
        />
      );
    });
    return <div className="image-list">{movie}</div>;
  }

  //If the movies are undefined or if the user somehow makes it this far without submiting the form
  //the the user back to the homepage to fill out the form
  else
    return (
      <h2 className="ui container ui big red label">
        <Redirect to="/" />
      </h2>
    );
};

export default MovieList;
