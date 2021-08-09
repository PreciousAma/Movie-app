import React from 'react';
import '../styles/Card3.css';
import splitName from '../helpers/splitName';
import { animateScroll as scroll } from 'react-scroll'; 

const Card3 = ({image, text, setCurrentActor, actorId}, ref) => {
    const [firstname, others] = splitName(text);
    
    const handleClick = () => {
        setCurrentActor(actorId)
        scroll.scrollTo("featured-actor", {})
    }

    return (
            <div className="card3" ref={ref} onClick={handleClick} >
                <div className="card3__image" >
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
