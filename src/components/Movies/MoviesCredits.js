import React, { useState, useEffect, useRef } from 'react';
import { Api } from '../../utils/Api';
import Flicking from "@egjs/react-flicking";
import Card2 from '../../reuseables/Card2';

const MoviesCredits = ({ currentActor }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const flicking = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        getMoviesCredits();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentActor]);

    const getMoviesCredits = async () => {
        try {
          const { data } = await Api.get(`/person/${currentActor}/movie_credits`);
          const sortedMovies = data.cast.sort((a, b) => new Date(b.release_date) - new Date(a.release_date) );
          setResult(sortedMovies);
          setIsLoading(false);
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        } finally {
          setIsLoading(false);
        }
    }    

    return (
      <>
        {!isLoading ? <div className="featured-actor__items">
          <h2 className="nav__link active">Movies</h2>
            <Flicking 
              align="prev"
              ref={flicking}
              bound
              moveType="freeScroll"
              className="featured-actor__card"
            >
              {result.map((card2, index) => {
                if (!!card2.poster_path) {
                  return (
                    <Card2
                      key={card2.id}
                      index={index}
                      image={`https://image.tmdb.org/t/p/original${card2.poster_path}`}
                    />
                  )
                }
              
                return null;
              })}
            </Flicking>
        </div> : null}
      </>
    )
}
export default MoviesCredits;
