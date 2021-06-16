import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Avengers from '../images/Avengers.jpg';
import '../styles/MoviesCarousel.css';
import stars from '../images/stars.svg';
import Header from '../reuseables/Header';
import '../styles/Header.css';
import { Api } from '../utils/Api';
import format from 'date-fns/format';
import ReactStarsRating from 'react-awesome-stars-rating';

const MoviesCarousel = () => {
  const [data, setData] = useState([]);
  console.log(data);
  // PROMISE .then() .catch()
  // const getNowPlayingMovies = () => {
  //   Api.get('/movie/now_playing')
  //   .then((response) => console.log({ response }))
  //   .catch((error) => console.log({ error: error.message }))
  // }
  // getNowPlayingMovies();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

// ASYNC/AWAIT more clarity.
  const getNowPlayingMovies = async () => {
    try {
      const { data } = await Api.get('/movie/now_playing');
      setData(data.results.slice(0, 4));
    } catch(error) {
      const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
      console.log({ errorMessage });
    }
  }

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
        {data.map((carousel) => (
          <div key={carousel.id} className="carousel__item">
            <img src={Avengers} alt="carousel1" className="item__image" />
            <div className="item__text">
              <Header
                title={format(new Date(carousel.release_date), "dd  MMM  yyyy")}
                subtitle={carousel.original_title}
              />
              <div className="summary">
                <p className="summary__text">{carousel.overview} </p>
                <div className="ratings">
                <ReactStarsRating 
                  isEdit={false}
                  size={20}
                  starGap={4}
                  className="rating"
                  value={carousel.vote_average/2}
                  primaryColor='#ED8A19'
                />
                  <span className="reviews">{carousel.vote_count}  Votes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default MoviesCarousel;
