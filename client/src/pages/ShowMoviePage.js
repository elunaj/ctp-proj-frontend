import React, { Component } from "react";
import Axios from "axios";
import MovieCard from "../components/MovieCard";
import ReactPlayer from 'react-player';
import "../styles/ShowMoviePage.css";

export class ShowMoviePage extends Component {
  state = {
    filmTitle: "",
    releaseDate: "",
    userScore: 0,
    genres: [],
    runTime: 0,
    tagLine: "",
    overview: "",
    posterImage: "",
    backDropImage: "",
    videos: [],
    stateUpdated: false
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/show/${this.props.location.state.id}`, {})
      .then((response) => {

        let data = response.data;
        //console.log("user data", data);
        console.log(data)

        this.setState({
          filmTitle: data.original_title,
          releaseDate: data.release_date,
          userScore: data.vote_average,
          genres: [...data.genres],
          runTime: data.runtime,
          tagLine: data.tagline,
          overview: data.overview,
          posterImage: data.poster_path,
          backDropImage: data.backdrop_path,
          videos: [...data.videos.results],
          stateUpdated: true
        })
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    console.log("state in show page" + this.state);
    return (
      <div style={{color: 'black'}}>
        hello from the show page

        {this.state.stateUpdated 
          ? 
          <div>
            Poster Image: 

            <div className="responsive poster" >
              <img
                class="card-img-top"
                src={`http://image.tmdb.org/t/p/w500/${this.state.posterImage}`}
                alt="Card image cap"
              />
            </div>

            Backdrop Image:
            <div className="responsive backdrop">
              <img
                class="card-img-top"
                src={`http://image.tmdb.org/t/p/w780/${this.state.backDropImage}`}
                alt="Card image cap"
              />
            </div>

            Film Title: {this.state.filmTitle} <br />
            Genres: {this.state.genres.map((genre, i) => {
                  return <li key={i}>{genre.name}</li>
            })}
            Release Date: {this.state.releaseDate} <br />
            User Score: {this.state.userScore} <br />
            Runtime: {this.state.runTime} <br />
            Tag Line: {this.state.tagLine} <br />
            Overview: {this.state.overview} <br />
            Trailer: https://www.youtube.com/watch?v={this.state.videos[0].key}

            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${this.state.videos[0].key}`} 
              playing={false} 
              controls={true}
              muted={true}
              />
          </div> : 'testing'
        }
 
      </div>
    );
  }
}

export default ShowMoviePage;
