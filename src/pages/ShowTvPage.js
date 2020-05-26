import React, { Component } from "react";
import Axios from "axios";
import TvStats from "../components/TvStats";
import SeasonCard from "../components/SeasonCard";
import ReactPlayer from "react-player";
import "../styles/ShowMoviePage.css";
import PropagateLoader from "react-spinners/PropagateLoader";

export class ShowTvPage extends Component {
  state = {
    showTitle: "",
    releaseDate: "",
    userScore: 0,
    genres: [],
    runTime: 0,
    overview: "",
    posterImage: "",
    backDropImage: "",
    runtime: 0,
    homePage: "",
    originalLanguage: "",
    videos: [],
    stateUpdated: false,
    cast: [],
    originalName: "",
    status: "",
    networks: [],
    seasons: [],
    loading: true,
  };
  myRef = React.createRef();

  componentDidMount() {
    Axios.get(
      `https://desolate-eyrie-65348.herokuapp.com/tv/tv-details/${this.props.location.state.id}`,
      {}
    )
      .then((response) => {
        let data = response.data.response;
        this.setState({
          originalName: data.original_name,
          showTitle: data.name,
          releaseDate: data.first_air_date,
          userScore: data.vote_average * 10,
          genres: [...data.genres],
          runTime: data.episode_run_time,
          overview: data.overview,
          posterImage: data.poster_path,
          backDropImage: data.backdrop_path,
          videos: [...data.videos.results],
          stateUpdated: true,
          homePage: data.homepage,
          originalLanguage: data.original_language,
          cast: data.credits.cast,
          status: data.status,
          networks: [...data.networks],
          seasons: [...data.seasons],
          loading: false,
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

    // const lastSeason = this.state.seasons.length - 1;

    return (
      <div>
        {this.state.loading ? (
          <div className="mx-auto" style={{ width: "0px", marginTop: "250px" }}>
            <PropagateLoader size={25} color={"#1c58b5"} loading={true} />
          </div>
        ) : (
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.726),rgba(0, 0, 0, 0.584)),url(${backDropImage} )`,
            }}
            className="showPage-bg-container"
          >
            <div className="container">
              <div className="row ">
                <div className="col-lg-4 showPage-hero-content-container">
                  <div className="card d-none d-lg-block showCard">
                    <img
                      className="card-img-top"
                      src={`http://image.tmdb.org/t/p/w780/${this.state.posterImage}`}
                      alt="Card pic "
                    />
                  </div>
                </div>
                <div className="col-lg-8 showPage-hero-content-container-right">
                  <h1 className="movie-title">
                    {this.state.showTitle}
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
                  <h2 className="overview-tag">Overview</h2>
                  <p className="overview">{this.state.overview}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <h3 className="cast-section-heading">SeriesCast</h3>
              <div className="castScroll">
                {this.state.cast.map((castMember, i) => {
                  return (
                    <div className="card cast" key={i}>
                      <img
                        className="card-img-top cast-image"
                        src={`http://image.tmdb.org/t/p/w780/${castMember.profile_path}`}
                        alt="Card pic cap"
                      />
                      <p className="cast-name">{castMember.name}</p>
                      <p className="cast-character">{castMember.character}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <TvStats
                networks={this.state.networks}
                originalName={this.state.originalName}
                originalLanguage={this.state.originalLanguage}
                runtime={this.state.runTime}
                homePage={this.state.homePage}
                status={this.state.status}
              />
            </div>
          </div>
          <div className="row seasons-container">
            <div className="col-lg-9">
              <h2 className="last-season">Last Season</h2>

              {this.state.seasons === undefined ? null : this.state.seasons ? (
                <SeasonCard
                  showTitle={this.state.showTitle}
                  seasons={this.state.seasons}
                />
              ) : null}
            </div>
          </div>
          <div className="row media-section">
            <div className="col-lg-9 col-md-12">
              <h3 className="trailers">
                {this.state.videos[1] ? "Trailers" : "Trailer"}
              </h3>
              <div className="videoScroll">
                {this.state.stateUpdated
                  ? this.state.videos.map((video, i) => {
                      return (
                        <ReactPlayer
                          className="videos"
                          url={`https://www.youtube.com/watch?v=${video.key}`}
                          playing={false}
                          controls={true}
                          muted={true}
                          width="90%"
                          key={i}
                        />
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTvPage;
