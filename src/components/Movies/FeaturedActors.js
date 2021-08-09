import React, {useState, useEffect} from 'react';
import format from 'date-fns/format';
import splitName from '../../helpers/splitName';
import { Api } from '../../utils/Api';
import MoviesCredits from './MoviesCredits';

const FeaturedActors = ({ currentActor }) => {
    const [data, setData] = useState({});
    


    useEffect(() => {
      getActorsDetails();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentActor]);

      

    const getActorsDetails = async () => {
        try {
          const { data } = await Api.get(`/person/${currentActor}`);
          setData(data);
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        }
    }

    const [firstname, othernames] = splitName(data.name);
    return (
        <section className="featured-actor" >
          <div className="featured-actor__content">
            <div className="featured-actor__texts">
              <h2 className="title">
                <span>{firstname}</span>
                <span>{othernames}</span>
              </h2>
              <p className="texts">{data.birthday ? format(new Date(data.birthday), "dd  MMM  yyyy") : null}</p>
              <p className="texts">{data.place_of_birth}</p>
            </div>
            <MoviesCredits 
            currentActor={currentActor} />

          </div>
        </section>
    )
}

export default FeaturedActors;
