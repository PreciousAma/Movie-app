import React, { useState, useEffect, useRef } from 'react';
import {configResponsive, useResponsive} from 'ahooks';
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import '../styles/MoviesCarousel.css';
import Header from '../reuseables/Header';
import '../styles/Header.css';
import { Api } from '../utils/Api';
import format from 'date-fns/format';
import ReactStarsRating from 'react-awesome-stars-rating';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});


const MoviesCarousel = () => {
  const [data, setData] = useState([]);
  const flicking = useRef(null);
  const responsive = useResponsive();
  console.log(responsive);

  useEffect(() => {
    getNowPlayingMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

// ASYNC/AWAIT more clarity.
  const getMoviesDetail = async (results) => {
    try {
      const dataArray = [];

      for (const result of results) {
        const { data } = await Api.get(`/movie/${result}?append_to_response=images`);
        dataArray.push(data);
      }

      return dataArray;
    } catch(error) {
      const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
      console.error({ errorMessage });
    }
  }

  const getNowPlayingMovies = async () => {
    try {
      const { data } = await Api.get('/movie/now_playing');
      const results = data.results.slice(0, 4).map((result) => result.id);
      const moviesDetail = await getMoviesDetail(results);
      const newMoviesDetail = moviesDetail.map((movie) => {
        return ({
          ...movie,
          poster_path: movie.images.posters.find((movie) => movie.iso_639_1 === 'en' || (movie.height === 3000 && movie.width === 2000)),
          backdrop_path: movie.images.backdrops.find((movie) => movie.iso_639_1 === 'en' || (movie.height === 1080 && movie.width === 1920)),
        })
      });
      console.log({ newMoviesDetail });
      setData(newMoviesDetail);
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
            <img src={`https://image.tmdb.org/t/p/original${responsive.middle ? carousel.backdrop_path.file_path : carousel.poster_path.file_path }`} alt="carousel1" className="item__image" />
            <div className="item__text">
              <Header
                title={format(new Date(carousel.release_date), "dd  MMM  yyyy")}
                subtitle={carousel.original_title}
              />
              <div className="summary">
                {responsive.middle ? <p className="summary__text">{carousel.overview}</p> : null}
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
