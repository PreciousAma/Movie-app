import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Avengers from '../images/Avengers.jpg';
import '../styles/MoviesCarousel.css';
import stars from '../images/stars.svg';
import Header from '../reuseables/Header';
import '../styles/Header.css';

const MoviesCarousel = () => {
  const indicatorStyles = {
      background: '#ffffff',
      width: 30,
      height: 4,
      borderRadius: 2,
      display: 'inline-block',
      margin: '0 2px',
      opacity: 0.36
  };

  const customIndicator = (clickHandler, isSelected, index, label) => {
    if (isSelected) {
      return (
          <li
              style={{ ...indicatorStyles, background: '#FF6B00', opacity: 1 }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
          />
      );
    }
    return (
        <li
            style={indicatorStyles}
            onClick={clickHandler}
            onKeyDown={clickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
        />
    );
  }

  return (
    <section className="moviescarousel">
      <Carousel
        // autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={customIndicator}
      >
        <div className="carousel__item">
          <img src={Avengers} alt="carousel1" className="item__image" />
          <div className="item__text">
            <Header 
            title='31 SEPTEMBER 2019'
            subtitle='AVENGERS - INFINITY WAR'
            />
            <div className="summary">
              <p className="summary__text">In 2016, Marvel shortened the title to Avengers: Infinity War. Filming began in January 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, with a large cast consisting mostly of actors. </p>
              <div className="ratings">
                <img src={stars} alt="stars" className="star-icons" />
                <span className="reviews">12K Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__item">
          <img src={Avengers} alt="carousel1" className="item__image" />
          <div className="item__text">
            <Header />
            <div className="summary">
              <p className="summary__text">In 2016, Marvel shortened the title to Avengers: Infinity War. Filming began in January 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, with a large cast consisting mostly of actors. </p>
              <div className="ratings">
                <img src={stars} alt="stars" className="star-icons" />
                <span className="reviews">12K Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__item"> 
          <img src={Avengers} alt="carousel1" className="item__image" />
          <div className="item__text">
            <Header />
            <div className="summary">
              <p className="summary__text">In 2016, Marvel shortened the title to Avengers: Infinity War. Filming began in January 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, with a large cast consisting mostly of actors. </p>
              <div className="ratings">
                <img src={stars} alt="stars" className="star-icons" />
                <span className="reviews">12K Reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel__item"> 
          <img src={Avengers} alt="carousel1" className="item__image" />
          <div className="item__text">
            <Header />
            <div className="summary">
              <p className="summary__text">In 2016, Marvel shortened the title to Avengers: Infinity War. Filming began in January 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, with a large cast consisting mostly of actors. </p>
              <div className="ratings">
                <img src={stars} alt="stars" className="star-icons" />
                <span className="reviews">12K Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default MoviesCarousel;
