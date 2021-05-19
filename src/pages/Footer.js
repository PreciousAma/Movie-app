import React from 'react';
import '../styles/Footer.css';
import UMovies from '../images/UMovies.svg';

const Footer = () => {
    return (
        <footer className="footer container">
            <div>
                <img className="footer__img" src={UMovies} alt="logo" />
                <div className="social-icons">
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-linkedin-in icon"></i>
                </div>
            </div>
            <div className="links">
                <h2 className="title">quick links</h2>
                <ul className="links__wrap">
                    <li className="link">Movies</li>
                    <li className="link">Actors</li>
                    <li className="link">About</li>
                    <li className="link">Privacy Policy</li>
                </ul>
            </div>
        </footer>        
    )
}

export default Footer;