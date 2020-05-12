import React, { Component } from "react";
import Axios from "axios";
import MovieCard from "../components/MovieCard";

export class ShowMoviePage extends Component {
  state = {
    filmTitle: "",
    releaseDate: "",
    userScore: 0,
    genres: [],
    runTime: 0,
    tagLine: "",
    overview: "",
    imageLink: "",
    stateUpdated: false
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/show/${this.props.location.state.id}`, {})
      .then((response) => {

        let data = response.data;
        console.log(data);

        this.setState({
          filmTitle: data.original_title,
          releaseDate: data.release_date,
          userScore: data.vote_average,
          genres: [...data.genres],
          runTime: data.runtime,
          tagLine: data.tagline,
          overview: data.overview,
          imageLink: data.poster_path,
          stateUpdated: true
        })
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    console.log(this.state)
    return (
      <div>
        hello from the show page

        {this.state.stateUpdated 
          ? 
          <div>
            Image: <img
                      class="card-img-top"
                      src={`http://image.tmdb.org/t/p/w185/${this.state.imageLink}`}
                      alt="Card image cap"
                    />
            Film Title: {this.state.filmTitle} <br />
            Release Date: {this.state.releaseDate} <br />
            User Score: {this.state.userScore} <br />
            Runtime: {this.state.runTime} <br />
            Tag Line: {this.state.tagLine} <br />
            Overview: {this.state.overview} <br />
          </div> : 'no data'
        }
 
      </div>
    );
  }
}

export default ShowMoviePage;
