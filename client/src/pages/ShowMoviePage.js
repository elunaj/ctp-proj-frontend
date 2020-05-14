import React, { Component } from "react";
import Axios from "axios";
import MovieCard from "../components/MovieCard";
import ReactPlayer from "react-player";
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
    stateUpdated: false,
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/show/${this.props.location.state.id}`, {})
      .then((response) => {
        let data = response.data;
        //console.log("user data", data);
        console.log(data);

        this.setState({
          originalTitle: data.original_title,
          filmTitle: data.title,
          releaseDate: data.release_date,
          userScore: data.vote_average * 10,
          genres: [...data.genres],
          runTime: data.runtime,
          tagLine: data.tagline,
          overview: data.overview,
          posterImage: data.poster_path,
          backDropImage: data.backdrop_path,
          videos: [...data.videos.results],
          stateUpdated: true,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const backDropImage = `http://image.tmdb.org/t/p/w780/${this.state.backDropImage}`;
    const releaseYear = this.state.releaseDate.toString().split("-")[0];
    const scoreBg =
      this.state.userScore >= 70
        ? "#408d53"
        : this.state.userScore >= 40
        ? "#6d6419"
        : "#962329";
    return (
      <div>
        {/* {this.state.stateUpdated ? (
          <div>
            Poster Image:
            <div className="responsive poster">
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
            Genres:{" "}
            {this.state.genres.map((genre, i) => {
              return <li key={i}>{genre.name}</li>;
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
          </div>
        ) : (
          "testing"
        )} */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.726),rgba(0, 0, 0, 0.584)),url(" +
              backDropImage +
              ")",
          }}
          className="showPage-bg-container"
        >
          <div className="container">
            <div className="row ">
              <div className="col-lg-4 showPage-hero-content-container">
                <div className="card d-none d-lg-block showCard">
                  <img
                    class="card-img-top"
                    src={`http://image.tmdb.org/t/p/w780/${this.state.posterImage}`}
                    alt="Card image cap"
                  />
                  <div class="card-body"></div>
                </div>
              </div>
              <div className="col-lg-8 showPage-hero-content-container-right">
                <h1 className="movie-title">
                  {this.state.filmTitle}
                  <span className="release-year">({releaseYear})</span>
                </h1>
                <p className="genres">
                  {this.state.genres.map((genre, i) => {
                    return (
                      <span style={{ marginRight: "1rem" }} key={i}>
                        {genre.name}
                      </span>
                    );
                  })}
                </p>
                <h1 style={{ background: `${scoreBg}` }} className="score">
                  {this.state.userScore}
                </h1>
                <p className="tagLine">{this.state.tagLine}</p>
                <h2 className="overview-tag">Overview</h2>
                <p className="overview">{this.state.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* <ReactPlayer
              url={`https://www.youtube.com/watch?v=${this.state.videos[0].key}`}
              playing={false}
              controls={true}
              muted={true}
            /> */}
            {/* <iframe
              className="iframe"
              src={`https://www.youtube.com/watch?v=${this.state.videos[0].key}`}
              width="100%"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen="true"
              title="csfored-overview"
            ></iframe> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMoviePage;
