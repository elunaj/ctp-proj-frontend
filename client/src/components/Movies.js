import React, { Component } from "react";
import SearchBar from "./SearchBar";
import api from "../api/api";
import MovieList from "./MovieList";

export class Movies extends Component {
  state = { movies: [] };

  // Callback for making a network request when the search term changes.
  // The network request is asynchronous, so we tag our function as `async` and
  // `await` to allow the promise to resolve
  onSearchSubmit = async term => {
    // axios (unsplash) get is async and returns a promise, so we need to deal with the promise.
    const response = await api.get("/", {
      params: {
        s: term,
        apikey: process.env.REACT_APP_MOVIE_API_KEY
      }
    }).then( response =>
    this.setState({ movies: response.data.Search }))
    .catch(error=>{
      console.log(error)
    })
  }

  render() {
    return (
      <div className="pushable">
        <div className="ui inverted vertical masthead center aligned segment bg" >
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu">
              <a className="active item">Home</a>
            </div>
          </div> 

          <div className="ui text container" style={{marginTop:'3em', }}>
            <h1 className="ui inverted header">FeelsFlix</h1>
            <h2>“Happiness is not a station you arrive at, but a manner of traveling.” </h2>
            <h3>—Margaret Lee Runbeck</h3>
            {/* <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div> */}
            <SearchBar onSearchSubmit={this.onSearchSubmit} />
          </div>
        </div>
 
        <div className="ui container" style={{marginTop: '10px'}}>

        <MovieList movies={this.state.movies} />
        
          </div>
          
      </div>
    );
  }
}

export default Movies;
