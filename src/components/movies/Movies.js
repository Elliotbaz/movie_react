import React from 'react';
import classes from './Movies.module.css';
import Button from '../UI/Button';

const Movies = props => {
  const likedMovieData = {
    id: props.id,
    title: props.original_title,
    language: props.original_language,
    releaseDate: props.release_date,
    imgSource: `https://www.themoviedb.org/t/p/w440_and_h660_face/${props.backdrop_path}`,
    rating: props.vote_average,
  };

  const addLikedMovie = () => {
    props.likedMovie(likedMovieData);
  };

  return (
    // movie box
    <div className={classes.moviesBox}>
      {/* movie image  */}
      <div className={classes.moviesImage}>
        <div className={classes.topInfo}>Rating: {props.vote_average}</div>
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.backdrop_path}`}
          alt={props.original_title}
        />{' '}
      </div>
      {/* movie texts section */}
      <div className={classes.textPart}>
        <div className={classes.moviesTitle}>
          <h3> {props.original_title}</h3>
        </div>
        <div className={classes.moviesOtherInfo}>
          <b>Language: {props.original_language.toUpperCase()}</b>
        </div>
        <span className={classes.releaseDate}>
          {' '}
          Release Date: {props.release_date}
        </span>
        <div className={classes.likeButtonBox}>
          {' '}
          <Button className={classes.button} onClick={addLikedMovie}>
            Like
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
