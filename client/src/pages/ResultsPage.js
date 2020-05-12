import React, { Component } from "react";
import MovieList from "../components/MovieList";
import "../styles/ResultsPage.css";
export class ResultsPage extends Component {
  render() {
    return (
      <div style={{ background: "#141414" }}>
        <div className="results-hero-container">
          <div className="container">
            <h1 className="results-hero-heading">Hello, world!</h1>
            <p className="results-hero-paragraph">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr class="my-4" />
            <p className="results-hero-sub-paragraph">
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        </div>
        <MovieList movies={this.props.location.movies} />
      </div>
    );
  }
}

export default ResultsPage;
