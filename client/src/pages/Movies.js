import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";

// import MovieList from "./MovieList";
import Navbar from "../components/Navbar";

export class Movies extends Component {
  // state = { movies: [] };

  // Callback for making a network request when the search term changes.
  // The network request is asynchronous, so we tag our function as `async` and
  // `await` to allow the promise to resolve
  onSearchSubmit = async (term) => {
    const response = await axios
      .post("http://localhost:5000/analysis/", {
        text: term,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="pushable">
        <div className="ui inverted vertical masthead center aligned segment bg">
          <Navbar />

          <div className="ui text container" style={{ marginTop: "3em" }}>
            <h1 className="ui inverted header">FeelsFlix</h1>
            <h2>
              “Happiness is not a station you arrive at, but a manner of
              traveling.”
            </h2>
            <h3>—Margaret Lee Runbeck</h3>
            {/* <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div> */}
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
          </div>
        </div>

        <div className="ui container" style={{ marginTop: "10px" }}>
          {/* <MovieList movies={this.state.movies} /> */}
        </div>
      </div>
    );
  }
}

export default Movies;
