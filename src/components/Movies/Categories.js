import React, { useRef, useState } from 'react';
import '../../styles/Movies.css';
import clsx from 'clsx';
import Popular from './Popular';
import Upcoming from './Upcoming';

const tabs = {
    popular: 1,
    upcoming: 2
};


const Categories = () => {
    const [activeTab, setActiveTab] = useState('popular');
    const flicking = useRef(null);

    return (
        <>
            <div className="categories">
                <div className="categories__nav--items">
                    <ul className="nav__links">
                        <li className={clsx('nav__link', tabs[activeTab] === 1 && 'active')} onClick={() => setActiveTab('popular')}>Popular</li>
                        <li className={clsx('nav__link', tabs[activeTab] === 2 && 'active')} onClick={() => setActiveTab('upcoming')}>Upcoming</li>
                    </ul>
                </div>
            </div>
            {activeTab === 'popular' && <Popular ref={flicking} />}
            {activeTab === 'upcoming' && <Upcoming ref={flicking} />}
        </>
    )
}

export default Categories;