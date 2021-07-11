import React,{useRef, useState, useEffect} from 'react';
import '../styles/Actors.css';
import '../styles/Header.css';
import FeaturedActors from '../components/Movies/FeaturedActors';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import { Api } from '../utils/Api';
import Card3 from '../reuseables/Card3';
import Flicking from "@egjs/react-flicking";


const Actors = ({ name }) => {
    const [data, setData] = useState([]);
    const [flick, setFlick] = useState(null);
    const flicking = useRef(null);
    const [currentActor, setCurrentActor] = useState("");


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
              onClick={() => setCurrentActor(card.id)}
              index={index}
              image={`https://image.tmdb.org/t/p/original${card.profile_path}`}
              text={card.name}
            />
          ))}
         </Flicking>
         <FeaturedActors currentActor={currentActor} />

        </section>
    );

}

export default Actors;
