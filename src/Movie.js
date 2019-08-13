import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import StarRatings from "react-star-ratings";

const Movie = ({ title, summary, poster, genres, rating }) => {
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
        <StarRatings
          rating={rating / 2}
          starRatedColor="#FEB974"
          starDimension="15px"
          starSpacing="2px"
        />
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired
};

export default Movie;
