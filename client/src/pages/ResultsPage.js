import React, { Component } from "react";
import MovieList from "../components/MovieList";
export class ResultsPage extends Component {
  render() {
    return (
      <div>
        <MovieList movies={this.props.location.movies} />
      </div>
    );
  }
}

export default ResultsPage;
