import React from 'react';
import '../styles/Card2.css'

const Card2 = ({image}) => {
    return (
        <div className="card2">
            <img src={image} alt="movie poster" className="image" />
        </div>
    )
}

export default Card2;
