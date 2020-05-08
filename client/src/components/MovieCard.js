import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { title, image, id } = this.props;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <p>{id}</p>
          <img
            ref={this.imageRef}
            src={`http://image.tmdb.org/t/p/w185/
${image}`}
          />
          <Link
            to={{
              pathname: "/show",
              state: {
                id,
              },
            }}
          >
            click meh
          </Link>
        </div>
      </div>
    );
  }
}
export default MovieCard;
