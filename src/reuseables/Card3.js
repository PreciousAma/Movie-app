import React from 'react';
import '../styles/Card3.css';
import splitName from '../helpers/splitName';


const Card3 = ({image, text, onClick}, ref) => {
    const [firstname, others] = splitName(text);
         
    return (
      <div className="card3" ref={ref} onClick={onClick}>
            <div className="card3__image">
                <img src={image} alt="poster" className="image" />
            </div>
            <div className="card3__texts">
                <p className="text">
                    <span className="name">{firstname}</span>
                    <span className="name">{others}</span>
                </p> 
            </div>

      </div>  
    )
}

export default React.forwardRef(Card3);
