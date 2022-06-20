import React, {useEffect, useState} from 'react';
import Movies from './movies/Movies';
import Showcase from './showcase/Showcase';
import classes from './MoviesRoute.module.css';
const MoviesRoute = props => {
  const moviesApi =
    'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17';
  const [movies, setMovies] = useState([]);

  //use effect to call the API
  useEffect(() => {
    fetch(moviesApi)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const addLikedMovieHandler = moviesData => {
    alert(moviesData.title + ' has been added to Like');
    props.userLikedMovies(moviesData);
  };

  return (
    <>
      <Showcase />
      <div className={classes.moviesHeading}>
        <h2> Latest Movies</h2>
      </div>
      <section className={classes.movieList}>
        {movies.map(movies => (
          <Movies
            {...movies}
            key={movies.id}
            likedMovie={addLikedMovieHandler}
          />
        ))}
      </section>
    </>
  );
};

export default MoviesRoute;
