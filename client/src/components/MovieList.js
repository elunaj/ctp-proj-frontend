import React from "react";
// import "../images/MovieList.css";
import MovieCard from "../components/MovieCard";

const MovieList = (props) => {
  // In this example props.images = [
  //                                   {id: ..., url: ..., description: ...},
  //                                   {id: ..., url: ..., description: ...}
  if (props.movies !== undefined) {
    const movies = props.movies.map((movie) => {
      return <MovieCard title={movie.Title} image={movie.Poster} />;
    });

    return <div className="image-list">{movies}</div>;
  } else
    return (
      <h2 className="ui container ui big red label"> Opps! No movies found</h2>
    );
};

export default MovieList;
