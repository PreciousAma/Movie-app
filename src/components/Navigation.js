import React from 'react';
import UMovies from '../images/UMovies.svg';
import '../styles/navigation.css';

const Navigation = () => {
    return (
      <nav className="navbar">
        <div className="container container--navbar">
            <div className="navbar__items">
              <img className="navbar__img" src={UMovies} alt="logo" />
              <ul className="navbar__links">
                  <li className="navbar__link"><a href="#Movies" className="navbar__link-item">Movies</a></li>
                  <li className="navbar__link"><a href="#Shows" className="navbar__link-item">Shows</a></li>
                  <li className="navbar__link"><a href="#Actors" className="navbar__link-item">Actors</a></li>
                  <li className="navbar__link"><a href="#News" className="navbar__link-item">News</a></li>  
              </ul>
            </div>    
        </div>
      </nav>
    )
}

export default Navigation;
