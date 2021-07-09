import React,{useRef, useState, useEffect} from 'react';
import '../styles/Actors.css';
import '../styles/Header.css';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import { Api } from '.././utils/Api';
import Card3 from '../reuseables/Card3';
import Card2 from '../reuseables/Card2'
import SherlockHolmes from '../images/SherlockHolmes.png';
import CivilWar from '../images/CivilWar.png';
import IronMan from '../images/IronMan.png';
import Avengersss from '../images/Avengersss.png';
import splitName from '../helpers/splitName';
import Flicking from "@egjs/react-flicking";


const Actors = ({name}) => {
    const [firstname, others] = splitName('Robert Downey Jr');
    const [data, setData] = useState([]);
    const [flick, setFlick] = useState(null);
    const flicking = useRef(null);


    useEffect(() => {
        getTopActors();
      }, []);

      useEffect(() => {
        if (flicking.current) {
            setFlick(flicking.current);
        }
    }, [flicking]);

    const getTopActors = async () => {
        try {
          const { data } = await Api.get('/person/popular');
          console.log(data);
          setData(data.results);
        } catch (error) {
          const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
          console.error({ errorMessage });
        }
      }

    return (
      <section className="container actors">
        <header className="actors__header">
          <Header title="Top Actors" subtitle="Movies By Actors" />
          <PageButtons flicking={flick} />
        </header>

        <Flicking 
            align="prev"
            ref={flicking} 
            bound 
            moveType="freeScroll"
         >
         {data.map((card, index) => (
            <Card3
              key={card.id}
              index={index}
              image={`https://image.tmdb.org/t/p/original${card.profile_path}`}
              text={card.name}
            />
          ))}

         </Flicking>

        <div className="actors__card"></div>
        <section className="featured-actor">
          <div className="featured-actor__nav--items">
            <h2 className="nav__link active">Movies</h2>
            <PageButtons />
          </div>
          <div className="featured-actor__content">
            <div className="featured-actor__texts">
              <h2 className="title">
                <span>{firstname}</span>
                <span>{others}</span>
              </h2>
              <p className="texts">
                The past for me was 30 years of dependency, depravity, and
                despair …. otherwise known as ‘An Actor Prepares!
              </p>
              <span className="link">View Robert Biography</span>
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
      </section>
    );

}

export default Actors;