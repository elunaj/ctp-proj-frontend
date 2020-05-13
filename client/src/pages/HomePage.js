import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import movieGraphic from "../images/undraw_movie_night_fldd.svg";
import netflix from "../images/netflix-home.svg";
import couch from "../images/couch.svg";
import video from "../images/videos-stacked.svg";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { animateScroll as scroll } from "react-scroll";

import "../styles/HomePage.css";

// import MovieList from "./MovieList";
export class Movies extends Component {
  state = { error: "", success: false };

  // Callback for making a network request when the search term changes.
  // The network request is asynchronous, so we tag our function as `async` and
  // `await` to allow the promise to resolve
  onSearchSubmit = async (term) => {
    const response = await axios
      .post("http://localhost:5000/analysis/", {
        text: term,
      })
      .then((response) => {
        console.log(response.data.response);
        localStorage.setItem(
          "movies",
          JSON.stringify(response.data.response.results)
        );
        this.setState({ success: true });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  };
  scrollToTop() {
    scroll.scrollToTop();
  }
  render() {
    if (this.state.success)
      return (
        <Redirect
          push
          to={{
            pathname: "/results",
          }}
        />
      );

    return (
      <div style={{ background: "#141414" }}>
        <div className="hero-container" id="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="jumbotron">
                  <h1 className="hero-heading">
                    Lorem ipsum dolor sit amet Lorem, ipsum..
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque dolore odit ipsum illo ipsa quasi alias! Ducimus
                    totam eligendi tempora .
                  </p>
                  <SearchBar onSearchSubmit={this.onSearchSubmit} />
                  {this.state.error ? (
                    <h1 style={{ color: "red" }}>there has been an error</h1>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="home-info-columns">
            <h2 className="hero-info-heading">Lorem ipsum dolor sit amet.</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home-info-column">
                  <img src={video} alt="" />
                  <h5>Lorem, ipsum.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit ratione quas possimus cupiditate veniam vitae debitis
                    nemo deleniti dolore praesentium?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home-info-column">
                  <img src={netflix} alt="" />
                  <h5>Lorem, ipsum.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit ratione quas possimus cupiditate veniam vitae debitis
                    nemo deleniti dolore praesentium?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="home-info-column last">
                  <img src={couch} alt="" />
                  <h5>Lorem, ipsum.</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit ratione quas possimus cupiditate veniam vitae debitis
                    nemo deleniti dolore praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "white" }}>
          <div className="container">
            <div className="row flex-column-reverse flex-lg-row home-graphic-section">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="home-graphic-sec-graphic">
                  <img src={movieGraphic} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 ">
                <div className="home-graphic-sec-content">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus quaerat incidunt{" "}
                    <span style={{ color: "#1c58b5", fontWeight: "700" }}>
                      illo necessitatibus delectus
                    </span>{" "}
                    sunt odio labore quas amet dicta illo necessitatibus
                    delectus sunt odio labore quas amet dicta?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row home-exit-section">
            <div className="col-lg-12">
              <div className="home-exit-section-container">
                <h2>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
                <a onClick={this.scrollToTop} className="primary-button">
                  Lets go!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
