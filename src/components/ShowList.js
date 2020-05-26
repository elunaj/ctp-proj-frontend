import React, { Component } from "react";
import ShowCard from "../components/ShowCard";

class ShowList extends Component {
  render() {
    let showsData = JSON.parse(localStorage.getItem("shows"));
    let classNum = 0;

    const show = showsData.map((show) => {
      classNum++;
      return (
        <ShowCard
          showTv={"/showTv"}
          title={show.original_name}
          name={show.name}
          classNum={classNum}
          image={show.poster_path}
          id={show.id}
          backdrop={show.backdrop_path}
          key={show.id}
        />
      );
    });
    return (
      <div className="container-fluid">
        <div className="grid-container">{show}</div>
      </div>
    );
  }
}

export default ShowList;
