import React from "react";
import MovieCard from "../components/MovieCard";
import ShowCard from "./ShowCard";

const MovieList = () => {
  let classNum = 0;
  let moviesData = JSON.parse(localStorage.getItem("movies"));
  const movie = moviesData.map((movie) => {
    classNum++;

    return (
      <ShowCard
        showMovie={"/show"}
        title={movie.title}
        image={movie.poster_path}
        date={movie.release_date}
        id={movie.id}
        backdrop={movie.backdrop_path}
        classNum={classNum}
      />
    );
  });
  return (
    <div className="container-fluid">
      <div className="grid-container">{movie} </div>
    </div>
  );
};

export default MovieList;
