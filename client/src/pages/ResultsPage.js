import React, { Component } from "react";
import MovieList from "../components/MovieList";
import "../styles/ResultsPage.css";
import ToneMessage from "../components/ToneMessage";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

export class ResultsPage extends Component {
  state = { displayMovies: true, displayShows: false };

  displayMovies = () => {
    this.setState({
      displayMovies: true,
      displayShows: false,
    });
  };
  displayShows = () => {
    this.setState({
      displayMovies: false,
      displayShows: true,
    });
  };

  render() {
    return (
      <div style={{ background: "#141414" }}>
        <div className="results-hero-container">
          <ToneMessage />
          <button onClick={this.displayMovies}>movies</button>
          <button onClick={this.displayShows}>shows</button>
        </div>
        <MovieList movies={this.props.location.movies} />
      </div>
    );
  }
}

export default ResultsPage;
