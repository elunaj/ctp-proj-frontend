import React, { Component } from "react";
import Axios from "axios";
import MovieStats from "../components/MovieStats";
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
    revenue: 0,
    runtime: 0,
    homePage: "",
    budget: 0,
    originalLanguage: "",
    videos: [],
    stateUpdated: false,
  };
  myRef = React.createRef();

  componentDidMount() {
    Axios.get(`http://localhost:5000/show/${this.props.location.state.id}`, {})
      .then((response) => {
        let data = response.data;
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
          revenue: data.revenue,
          homePage: data.homepage,
          budget: data.budget,
          originalLanguage: data.original_language,
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
        <div
          ref={this.myRef}
          style={{
            // backgroundImage: "url(" + backDropImage + ")",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.726),rgba(0, 0, 0, 0.584)),url(${backDropImage} )`,
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
                      <span style={{ marginRight: "5px" }} key={i}>
                        {genre.name}
                      </span>
                    );
                  })}
                </p>
                <h1 style={{ background: `${scoreBg}` }} className="score">
                  {this.state.userScore}%
                </h1>
                <p className="tagLine">{this.state.tagLine}</p>
                <h2 className="overview-tag">Overview</h2>
                <p className="overview">{this.state.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row media-section">
            <div className="col-lg-8 col-md-12">
              <h3 className="trailers">
                {this.state.videos[1] ? "Trailers" : "Trailer"}
              </h3>
              <div className="videoScroll">
                {this.state.stateUpdated
                  ? this.state.videos.map((video) => {
                      return (
                        <ReactPlayer
                          className="videos"
                          url={`https://www.youtube.com/watch?v=${video.key}`}
                          playing={false}
                          controls={true}
                          muted={true}
                          light={true}
                          width="80%"
                        />
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <MovieStats
                originalLanguage={this.state.originalLanguage}
                budget={this.state.budget}
                revenue={this.state.revenue}
                runtime={this.state.runTime}
                homePage={this.state.homePage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMoviePage;
