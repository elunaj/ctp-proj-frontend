import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { title, image, id, overview, backdrop } = this.props;
    return (
      <div class="card resultsCard">
        <Link to={{ pathname: "/show", state: { id } }}>
          <img
            class="card-img-top"
            src={`http://image.tmdb.org/t/p/w780/${image}`}
            alt="Card image cap"
          />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
        </div>
      </div>
    );
  }
}
export default MovieCard;
