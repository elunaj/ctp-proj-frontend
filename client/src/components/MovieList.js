import React from "react";
import MovieCard from "../components/MovieCard";
import PropagateLoader from "react-spinners/PropagateLoader";

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
        backdrop={movie.backdrop_path}
      />
    );
  });
  return (
    <div className="container">
      {movie ? (
        
            <div className="row">
              <div className="col-lg-12">
                <div className="card-columns">{movie}</div>
              </div>
            </div>
                  
            ) : (
            
            <div class="mx-auto" style={{width: "0px", marginTop: '100px'}}>
                <PropagateLoader
                  size={25}
                  color={"#1c58b5"}
                  loading={true}
                  />
            </div>
        )}
    </div>
  );

};

export default MovieList;
