import React, {useState, useEffect} from 'react';
import format from 'date-fns/format';
import SherlockHolmes from '../../images/SherlockHolmes.png';
import CivilWar from '../../images/CivilWar.png';
import IronMan from '../../images/IronMan.png';
import Avengersss from '../../images/Avengersss.png';
import PageButtons from '../../reuseables/PageButtons';
import Card2 from '../../reuseables/Card2';
import splitName from '../../helpers/splitName';
import { Api } from '../../utils/Api';

const FeaturedActors = ({ currentActor }) => {
    const [data, setData] = useState({});
    console.log(currentActor);

    useEffect(() => {
        getActorsDetails();
      }, [currentActor]);

    const getActorsDetails = async () => {
        try {
          const { data } = await Api.get(`/person/${currentActor || 1245}`);
          setData(data);
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        }
    }

    const [firstname, othernames] = splitName(data.name);
    return (
        <section className="featured-actor">
          <div className="featured-actor__nav--items">
            <h2 className="nav__link active">Movies</h2>
            <PageButtons />
          </div>
          <div className="featured-actor__content">
            <div className="featured-actor__texts">
              <h2 className="title">
                <span>{firstname}</span>
                <span>{othernames}</span>
              </h2>
              <p className="texts">{data.birthday ? format(new Date(data.birthday), "dd  MMM  yyyy") : null}</p>
              <p className="texts">{data.place_of_birth}</p>
            </div>
            <div className="featured-actor__items">
              <div className="featured-actor__card">
                <Card2 image={IronMan} />
                <Card2 image={Avengersss} />
                <Card2 image={CivilWar} />
                <Card2 image={SherlockHolmes} />
              </div>
            </div>
          </div>
        </section>
    )
}

export default FeaturedActors;
