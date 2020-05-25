import React from "react";
import MovieCard from "../components/MovieCard";
<<<<<<< HEAD
import ShowCard from "./ShowCard";
=======
import PropagateLoader from "react-spinners/PropagateLoader";
>>>>>>> 1e35dee4530538219ce7becd00b411ce14a6bf38

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
<<<<<<< HEAD
    <div className="container-fluid">
      <div className="grid-container">{movie} </div>
    </div>
  );
=======
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

>>>>>>> 1e35dee4530538219ce7becd00b411ce14a6bf38
};

export default MovieList;
