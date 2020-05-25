import React from "react";
import LogoNodejs from "react-ionicons/lib/LogoNodejs";
import MdLink from "react-ionicons/lib/MdLink";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function formattime(numberofminutes) {
  let zero = "0",
    hours,
    minutes,
    seconds,
    time;
  time = new Date(0, 0, 0, 0, numberofminutes, 0, 0);
  let hh = time.getHours();
  let mm = time.getMinutes();
  return hh + "h " + mm + "m";
}
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const MovieStats = ({
  originalLanguage,
  budget,
  revenue,
  runtime,
  homePage,
}) => {
  return (
    <div className="movie-stats">
      <OverlayTrigger overlay={<Tooltip id="tooltip">Visit Homepage</Tooltip>}>
        <span style={{ marginBottom: "10px" }} className="d-inline-block ">
          <a href={homePage} target="_blank">
            <MdLink fontSize="2rem" />
          </a>
        </span>
      </OverlayTrigger>

      <h5> Original Language </h5>
      <h5> Budget </h5>
      <p>{formatter.format(budget)} </p>
      <h5> Revenue </h5>
      <p>{formatter.format(revenue)}</p>
      <h5> Runtime </h5>
      <p>{formattime(runtime)}</p>
    </div>
  );
};

export default MovieStats;
