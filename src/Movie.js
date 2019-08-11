import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const Movie = ({ title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} className="movie__poster" />
      <div className="movie__data">
        <div className="movie__title">{title}</div>
        <div className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <div key={index} className="genres__genre">
                {genre}
              </div>
            );
          })}
        </div>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
