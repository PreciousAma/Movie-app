import React from 'react';
import '../styles/PageButtons.css';

const PageButtons = () => {
    return (
        <div className="pagination">
            <button className='button'><i className="fas fa-angle-left"></i></button>
            <button className='button'><i className="fas fa-angle-right"></i></button>
        </div>
        
    )
}


export default PageButtons;
