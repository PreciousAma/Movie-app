import React, {useRef, useEffect, useState} from 'react';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import '../styles/Movies.css';
import Categories from '../components/Movies/Categories';
import MovieList from '../components/Movies/MovieList';

const Movies = () => {
    const [flick, setFlick] = useState(null);
    const flicking = useRef(null);

    useEffect(() => {
        if (flicking.current) {
            setFlick(flicking.current);
        }
    }, [flicking]);
    
    return (
        <div className="container movies">
            <header className="movies__header">
                <Header
                    title='TOP MOVIES'
                    subtitle='RECOMMENDED MOVIES'
                />
                <PageButtons flicking={flick} />
            </header>

            <MovieList ref={flicking} />
            <Categories />
        </div>
    )
}

export default Movies;
