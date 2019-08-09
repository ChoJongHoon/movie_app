import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

export default class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=like_count"
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading..</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
