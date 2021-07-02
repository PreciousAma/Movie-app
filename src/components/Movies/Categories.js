import React, { useState } from 'react';
import Card2 from '../../reuseables/Card2';
import PageButtons from '../../reuseables/PageButtons';
import '../../styles/Movies.css';
import Kesari from '../../images/Kesari.png';
import Manikarnika from '../../images/Manikarnika.png';
import Uri from '../../images/Uri.png';
import Singham from '../../images/Singham.png';
import Thackeray from '../../images/Thackeray.png';

const tabs = {
    latest: 1,
    popular: 2,
    upcoming: 3
};


const Categories = () => {
    const [activeTab, setActiveTab] = useState('latest');

    return (
        <>
            <div className="categories">
                <div className="categories__nav--items">
                    <ul className="nav__links">
                        <li className={`nav__link ${tabs[activeTab] === 1 && 'active'}`} onClick={() => setActiveTab('latest')}>Latest</li>
                        <li className={`nav__link ${tabs[activeTab] === 2 && 'active'}`} onClick={() => setActiveTab('popular')}>Popular</li>
                        <li className={`nav__link ${tabs[activeTab] === 3 && 'active'}`} onClick={() => setActiveTab('upcoming')}>Upcoming</li>
                    </ul>
                    <div><PageButtons /></div>   
                </div>
            </div>

            <div className="card2__category">
                <Card2 image={Uri} />
                <Card2 image={Manikarnika} />
                <Card2 image={Thackeray} />
                <Card2 image={Kesari} />
                <Card2 image={Singham} />
            </div>
        </>
    )
}

export default Categories;