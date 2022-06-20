import React, {useContext} from 'react';
import Showcase from './showcase/Showcase';
import LikedMovies from './likedMovies/LikedMovies';
import classes from './LikedMoviesRoute.module.css';
import LikedMovieContext from '../store/AuthContext';

const LikedMoviesRoute = props => {
  const likedMovieCTX = useContext(LikedMovieContext);

  return (
    <>
      <Showcase />

      <div className={classes.moviesHeading}>
        <h2> Liked Movies</h2>
      </div>
      <section className={classes.movieList}>
        {likedMovieCTX.map(movies => (
          <LikedMovies {...movies} key={movies.id} />
        ))}
      </section>
    </>
  );
};
export default LikedMoviesRoute;
