import React, { useState, useEffect, useRef } from 'react';
import { Api } from '../../utils/Api';
import Flicking from "@egjs/react-flicking";
import Card2 from '../../reuseables/Card2';
import Loader from "react-loader-spinner";

const MoviesCredits = ({ currentActor }) => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const flicking = useRef(null);

    useEffect(() => {
        getMoviesCredits();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentActor]);

    const getMoviesCredits = async () => {
        try {
          setIsLoading(true);
          const { data } = await Api.get(`/person/${currentActor}/movie_credits`);
          const sortedMovies = data.cast.sort((a, b) => new Date(b.release_date) - new Date(a.release_date) );
          setResult(sortedMovies.slice(0, 100));
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        } finally {
          setIsLoading(false);
        }
    }    

    return (
      <>
         <div className="featured-actor__items">
          <h2 className="nav__link active">Movies</h2>
          {!isLoading ? <Flicking 
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
            </Flicking> : <Loader type="Oval" color="#F3353E" height={90} width={90} className="loader"  />}
        </div>
      </>
    )
}
export default MoviesCredits;
