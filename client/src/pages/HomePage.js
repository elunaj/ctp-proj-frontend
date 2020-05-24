import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import movieGraphic from "../images/undraw_movie_night_fldd.svg";
import netflix from "../images/netflix-home.svg";
import couch from "../images/couch.svg";
import video from "../images/videos-stacked.svg";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { animateScroll as scroll } from "react-scroll";
import PropagateLoader from "react-spinners/PropagateLoader";

import "../styles/HomePage.css";

// import MovieList from "./MovieList";
export class Movies extends Component {
  state = { error: "", success: false, loading: false };

  // Callback for making a network request when the search term changes.
  // The network request is asynchronous, so we tag our function as `async` and
  // `await` to allow the promise to resolve
  onSearchSubmit = async (term) => {

    this.setState({ loading: true });

    const response = await axios
      .post("http://localhost:5000/analysis/", {
        text: term,
      })
      .then((response) => {
        localStorage.setItem(
          "movies",
          JSON.stringify(response.data.response.results)
        );
        localStorage.setItem("tone", JSON.stringify(response.data.tone));
        this.setState({ success: true, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error, loading: false });
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
                    Welcome.
                  </h1>
                  <p>
                    Find movie suggestions based on your mood.
                  </p>
                  <SearchBar onSearchSubmit={this.onSearchSubmit} />
                  {this.state.error ? (
                      <div style={
                        {width: '50%', 
                        fontSize: '14px', 
                        textAlign: 'center',
                        marginBottom: '-25px'
                      }} 
                        class="mx-auto alert alert-danger" 
                        role="alert">
                        There has been an error. Please try again.
                      </div>
                     
                  ) : (
                    ""
                  )}

                  {this.state.loading ? (
                    <div class="mx-auto" style={{width: "0px", marginTop: '30px'}}>
                      <PropagateLoader
                        size={25}
                        color={"#1c58b5"}
                        loading={this.state.loading}
                      />
                      </div>
                    
               
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
            <h2 className="hero-info-heading">Our features.</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home-info-column">
                  <img src={video} alt="" />
                  <h5>Recommendations</h5>
                  <p>
                    Find rich, user-sourced information (images, trailers, cast, etc) 
                    about 547,374 movies and counting. All movie info is provided by 
                    the   <a style={{paddingLeft:'5'}}
                            href="https://developers.themoviedb.org/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            >Movie Database API.
                            </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="home-info-column">
                  <img src={netflix} alt="" />
                  <h5>Emotional Analysis</h5>
                  <p>
                    Our website can analyze emotions and tones in user-provided text. 
                    Once we find out how you're feeling, we send you movie recommentations
                    designed to boost your mood. User text analysis is done with the aid of 
                    the 
                     <a style={{paddingLeft:'5px'}}
                        href="https://www.ibm.com/watson/services/tone-analyzer/" 
                        target="_blank"
                        rel="noopener noreferrer"
                            >IBM Watson Tone Analyzer API.
                      </a>

                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="home-info-column last">
                  <img src={couch} alt="" />
                  <h5>Stop Choice Paralysis</h5>
                  <p>
                    No more wasted nights searching for the perfect film to watch. 
                    Our website helps you easily find movies designed to boost 
                    your positive feelings or counteract your negative feelings.
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
                  <h3>Our motivation.</h3>
                  <p>
                      Movies have the ability to help us relax and take a break from 
                      the real world. Due to the ubiquity of streaming 
                      services, there are thousands of movies to watch just a click away.
                    {" "}
                    <span style={{ color: "#1c58b5", fontWeight: "700" }}>
                      However, there is such a thing as too much choice. 
                    </span>{" "}
                      At the end of a long day, the last thing anyone wants to do is wrestle with
                      what to watch. There are just too many options and too much risk of 
                      picking a movie you won’t like. Our web app helps you find movies with 
                      ease, tailored to your help your mood. 

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
                   Created by 
                  <a style={{paddingLeft:'10px', paddingRight: '10px'}}  
                    href="https://www.linkedin.com/in/dayan-ramirez/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Dayan Ramirez
                  </a>
                  <p style={{display: 'inline'}}>
                    &
                  </p>
                  <a style={{paddingLeft:'10px', paddingRight: '10px'}}  
                    href="https://www.linkedin.com/in/eliasluna23/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >Elias Luna
                  </a>
                  <br />
                  <p style={{display: 'inline'}}>
                    @
                  </p>
                  <a href="https://cunytechprep.nyc/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    > CUNY Tech Prep
                  </a>
                </h2>
                
                <a onClick={this.scrollToTop} className="primary-button">
                  Back-to-Top
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
