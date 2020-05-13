import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { title, image, id, overview } = this.props;
    return (
      <div class="card resultsCard">
        <Link to={{ pathname: "/show", state: { id } }}>
          <img
            class="card-img-top"
            src={`http://image.tmdb.org/t/p/w500/${image}`}
            alt="Card image cap"
          />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          {/* <p className='card-body'>{overview}</p> */}
        </div>
      </div>
    );
  }
}
export default MovieCard;
