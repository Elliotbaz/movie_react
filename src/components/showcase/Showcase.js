import React from 'react';
import classes from './Showcase.module.css';
const Showcase = props => {
  const slideshow = [
    require('../../assets/image/s-1.jpg'),
    require('../../assets/image/s-2.jpg'),
    require('../../assets/image/s-3.jpg'),
  ];

  return (
    <section className={classes.main}>
      <h1 className={classes.showcaseHeading}>Showcase</h1>
      <ul id="autoWidth" className="cs-hidden">
        {slideshow.map((slide, i) => (
          <li className={`item-a`} key={i} style={{display: 'inline-block'}}>
            <div className={classes.showcaseBox}>
              <img src={slide} alt="showcase movie" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Showcase;
