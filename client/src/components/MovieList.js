import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
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
        key={movie.id}
      />
    );
  });
  return (
    <div className="container-fluid">
      {movie ? (
        <div className="grid-container">{movie} </div>
      ) : (
        <div className="mx-auto" style={{ width: "0px", marginTop: "100px" }}>
          <PropagateLoader size={25} color={"#1c58b5"} loading={true} />
        </div>
      )}
    </div>
  );
};

export default MovieList;
