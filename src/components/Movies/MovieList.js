import React, { useState, useEffect } from 'react';
import { Api } from '../../utils/Api';
import Card from '../../reuseables/Card';
import Flicking from "@egjs/react-flicking";


const MovieList = (props, ref) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    try {
      const { data } = await Api.get('/movie/now_playing');
      setData(data.results);
    } catch (error) {
      const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
      console.error({ errorMessage });
    }
  }

  return (
      <Flicking
        align="prev"
        ref={ref}
        bound
        moveType="freeScroll"
        className="movies-contents"
      >
        {data.map((card, index) => (
          <Card
            key={card.id}
            index={index}
            image={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
            title={card.title}
            subtext={card.overview}
            voteAverage={card.vote_average}
            voteCount={card.vote_count}
          />
        ))}
      </Flicking>
  )

  
}

export default React.forwardRef(MovieList);
