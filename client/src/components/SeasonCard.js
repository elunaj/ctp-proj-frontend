import React from "react";
const SeasonCard = ({ seasons, showTitle }) => {
  let getSeason = seasons.length - 1; //5
  return (
    <div className="season-container">
      {seasons.map((season) => {
        if (season.season_number === getSeason) {
          return (
            <div class="card mb-3 season-card">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img
                    src={`http://image.tmdb.org/t/p/w780/${season.poster_path}`}
                    class="card-img season-pic d-none d-md-block "
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title showTitle">{season.name}</h5>
                    <p class="card-text">{season.overview}</p>
                    <p class="card-text">
                      <small class="text-muted">
                        Season {getSeason} of {showTitle} premiered on
                        <span style={{ marginLeft: ".2rem" }}>
                          {season.air_date}
                        </span>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SeasonCard;
