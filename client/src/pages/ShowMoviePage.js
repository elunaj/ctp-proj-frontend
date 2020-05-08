import React, { Component } from "react";
import Axios from "axios";
export class ShowMoviePage extends Component {
  componentDidMount() {
    Axios.get(`http://localhost:5000/show/${this.props.location.state.id}`, {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return <div>hello from the show page</div>;
  }
}

export default ShowMoviePage;
