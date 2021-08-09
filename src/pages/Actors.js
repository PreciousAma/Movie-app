import React,{useRef, useState, useEffect} from 'react';
import '../styles/Actors.css';
import '../styles/Header.css';
import FeaturedActors from '../components/Movies/FeaturedActors';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import { Api } from '../utils/Api';
import Card3 from '../reuseables/Card3';
import Flicking from "@egjs/react-flicking";
import { Element } from 'react-scroll';


const Actors = ({ name }) => {
    const [actors, setActors] = useState([]);
    const [flick, setFlick] = useState(null);
    const flicking = useRef(null);
    const [currentActor, setCurrentActor] = useState('');


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
          setActors(data.results);
          const resultsLength = data.results.length;
          const randomNumber = Math.floor(Math.random() * resultsLength);
          setCurrentActor(data.results[randomNumber].id);
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
            moveType="snap"
            preventClickOnDrag
            className="flicking-actors"
         >
         {actors.map((actor, index) => (
            <Card3
              key={actor.id}
              actorId={actor.id}
              setCurrentActor={setCurrentActor}
              index={index}
              image={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              text={actor.name}
            />
          ))}
         </Flicking>

         <Element name="featured-actor">
              {currentActor && <FeaturedActors currentActor={currentActor} />}
         </Element>

        </section>
    );
}

export default Actors;
