import React from 'react';
import { FlickingError } from '@egjs/react-flicking';
import '../styles/PageButtons.css';

const PageButtons = ({ flicking }) => {
    const handleNext = () => {
        flicking
            .next()
            .catch(err => {
                if (err instanceof FlickingError) return;
                throw err;
            });
    }

    const handlePrev = () => {
        flicking
            .prev()
            .catch(err => {
                if (err instanceof FlickingError) return;
                throw err;
            });
    }
    
    return (
        <div className="pagination">
            <button className='button' onClick={handlePrev}><i className="fas fa-angle-left fa-2x" /></button>
            <button className='button' onClick={handleNext}><i className="fas fa-angle-right fa-2x" /></button>
        </div>
        
    )
}


export default PageButtons;
