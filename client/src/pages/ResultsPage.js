import React, { Component } from "react";
import MovieList from "../components/MovieList";
import "../styles/ResultsPage.css";
import ToneMessage from "../components/ToneMessage";
import { useParams } from "react-router-dom";
export class ResultsPage extends Component {
  render() {
    return (
      <div style={{ background: "#141414" }}>
        <div className="results-hero-container">
          <ToneMessage />
        </div>
        <MovieList movies={this.props.location.movies} />
      </div>
    );
  }
}

export default ResultsPage;
