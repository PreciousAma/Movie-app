import React from 'react';
import '../styles/Card2.css'

const Card2 = ({image}, ref) => {
    return (
        <div className="card2" ref={ref}>
            <img src={image} alt="movie poster" className="image" />
        </div>
    )
}

export default React.forwardRef(Card2);
