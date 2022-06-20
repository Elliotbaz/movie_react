import React from 'react';
import classes from './Navigation.module.css';
import Logo from './Logo';
import {NavLink} from 'react-router-dom';
const Navigation = props => {
  return (
    <nav>
      <NavLink to="/" className={classes.logo}>
        <Logo />{' '}
      </NavLink>

      <ul className={classes.menu}>
        <li>
          {' '}
          <NavLink to="/">Movies</NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/liked">Liked Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
