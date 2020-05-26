import React from "react";
import MdLink from "react-ionicons/lib/MdLink";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/ShowMoviePage.css";
function formattime(numberofminutes) {
  let time;
  time = new Date(0, 0, 0, 0, numberofminutes, 0, 0);
  let hh = time.getHours();
  let mm = time.getMinutes();
  return hh + "h " + mm + "m";
}

const TvStats = ({
  originalLanguage,
  originalName,
  runtime,
  homePage,
  status,
  networks,
}) => {
  return (
    <div className="movie-stats">
      <OverlayTrigger overlay={<Tooltip id="tooltip">Visit Homepage</Tooltip>}>
        <span style={{ marginBottom: "10px" }} className="d-inline-block ">
          <a href={homePage} target="_blank" rel="noopener noreferrer">
            <MdLink fontSize="2rem" />
          </a>
        </span>
      </OverlayTrigger>
      <h5> Original Name </h5>
      <p>{originalName}</p>
      <h5> Original Language </h5>
      <p>{originalLanguage}</p>
      <h5> Runtime </h5>

      <p>{formattime(runtime)}</p>
      <h5> Status </h5>

      <p>{status}</p>
      <h5> Networks </h5>
      {networks.map((network, i) => {
        return (
          <img
            key={i}
            className="network-logo"
            src={`http://image.tmdb.org/t/p/w780/${network.logo_path}`}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default TvStats;
