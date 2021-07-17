import React, { useState, useEffect, useRef } from 'react';
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import '../styles/MoviesCarousel.css';
import Header from '../reuseables/Header';
import '../styles/Header.css';
import { Api } from '../utils/Api';
import format from 'date-fns/format';
import ReactStarsRating from 'react-awesome-stars-rating';

const MoviesCarousel = () => {
  const [data, setData] = useState([]);
   const flicking = useRef(null);
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
      console.error({ errorMessage });
    }
  }

  const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: true })];
  
  return (
    <section className="moviescarousel">
      <Flicking 
        align="prev"
        ref={flicking}
        circular
        moveType="snap"
        plugins={plugins}
      >
        {data.map((carousel) => (
          <div key={carousel.id} className="carousel__item">
            <img src={`https://image.tmdb.org/t/p/original${carousel.backdrop_path}`} alt="carousel1" className="item__image" />
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
      </Flicking>
    </section>
  );
}

export default MoviesCarousel;
