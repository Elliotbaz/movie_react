import React from 'react';
import classes from './LikedMovies.module.css';
const LikedMovies = props => {
  return (
    // movie box
    <div className={classes.moviesBox}>
      {/* movie image  */}
      <div className={classes.moviesImage}>
        <div className={classes.topInfo}>Rating: {props.rating}</div>
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${props.imgSource}`}
          alt={props.title}
        />{' '}
      </div>
      {/* movie texts section */}
      <div className={classes.textPart}>
        <div className={classes.moviesTitle}>
          <h3> {props.title}</h3>
        </div>
        <div className={classes.moviesOtherInfo}>
          <b>Language: {props.language.toUpperCase()}</b>
        </div>
        <span className={classes.releaseDate}>
          {' '}
          Release Date: {props.releaseDate}
        </span>
      </div>
    </div>
  );
};

export default LikedMovies;
