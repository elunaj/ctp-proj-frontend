import React, { Component } from "react";
import MovieList from "../components/MovieList";
import "../styles/ResultsPage.css";
import ToneMessage from "../components/ToneMessage";
import ShowList from "../components/ShowList";

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
          <div className="show-buttons">
            <button
              className={
                this.state.displayMovies ? `show-button-clicked` : `show-button`
              }
              onClick={this.displayMovies}
            >
              movies
            </button>
            <button
              className={
                this.state.displayMovies ? `show-button` : `show-button-clicked`
              }
              onClick={this.displayShows}
            >
              shows
            </button>
          </div>
        </div>
        <div className="results-container">
          {this.state.displayMovies ? (
            <MovieList movies={this.props.location.movies} />
          ) : (
            <ShowList />
          )}
        </div>
      </div>
    );
  }
}

export default ResultsPage;
