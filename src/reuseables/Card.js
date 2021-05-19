import React from 'react';
import '../styles/Card.css';
import stars from '../images/stars.svg';

const Card = ({subtext, title, image}) => {
    return (
        <div className='card'>
           <div className='card__image'>
                <img src={image} alt="movie" className="img" />
            </div>
            <div className='card__texts'>
                <h3 className='card__text'>{title}</h3>
                <p className='card__subtext'>
                    {subtext}
                </p>
            </div>
            <div className="ratings">
                <img src={stars} alt="stars" className="star-icons" />
                <span className="reviews">12K Reviews</span>
            </div>           
        </div>
    )
}

export default Card;