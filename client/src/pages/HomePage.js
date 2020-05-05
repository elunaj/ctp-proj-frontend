import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import "../styles/HomePage.css";
// import MovieList from "./MovieList";

export class Movies extends Component {
  // state = { movies: [] };

  // Callback for making a network request when the search term changes.
  // The network request is asynchronous, so we tag our function as `async` and
  // `await` to allow the promise to resolve
  onSearchSubmit = (term) => {
    axios
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
      <div>
        <div className="hero-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content-contaienr">
                  <h1 className="hero-heading">
                    Lorem ipsum dolor sit amet Lorem, ipsum..
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque dolore odit ipsum illo ipsa quasi alias! Ducimus
                    totam eligendi tempora.
                  </p>
                  <SearchBar onSearchSubmit={this.onSearchSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
