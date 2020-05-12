import React, { Component } from "react";
import MovieList from "../components/MovieList";
export class ResultsPage extends Component {
  render() {
    return (
      <div style={{ background: "#141414" }}>
        <MovieList movies={this.props.location.movies} />
      </div>
    );
  }
}

export default ResultsPage;
