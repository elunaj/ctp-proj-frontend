import React from "react";
import "../styles/ShowCard.css";
import { Link } from "react-router-dom";

const ShowCard = (props) => {
  const {
    name,
    image,
    classNum,
    id,
    title,
    backdrop,
    showMovie,
    showTv,
  } = props;
  //image to be rendered will be a backdrop_path, if no backdrop, use the poster_path(image)
  let img = backdrop ? backdrop : image;
  //the path on click will be determined by which component's media was clicked on
  //if a movie was clicked it will go to the "/show" route,
  //if a show was clicked, it will go to the "/showTv" route
  let paths = showMovie ? "/show" : showTv ? "/showTv" : null;
  return (
    <div className={`item${classNum}`}>
      <Link to={{ pathname: `${paths}`, state: { id } }}>
        <img
          className="ShowCard-img"
          src={`http://image.tmdb.org/t/p/w780/${img}`}
          alt=""
        />
      </Link>
      <Link className="mediaTitle" to={{ pathname: `${paths}`, state: { id } }}>
        {name ? name : title}
      </Link>
    </div>
  );
};

export default ShowCard;
