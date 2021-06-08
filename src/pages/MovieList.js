import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({
        movies: data,
        loading: false,
      }));
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div>
        <div data-testid="movie-list">
          { loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </div>
    );
  }
}

export default MovieList;
