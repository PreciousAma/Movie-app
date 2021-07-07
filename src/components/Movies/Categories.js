import React, { useState, useEffect } from 'react';
import Card2 from '../../reuseables/Card2';
import PageButtons from '../../reuseables/PageButtons';
import '../../styles/Movies.css';
import Kesari from '../../images/Kesari.png';
import Manikarnika from '../../images/Manikarnika.png';
import Uri from '../../images/Uri.png';
import Singham from '../../images/Singham.png';
import Thackeray from '../../images/Thackeray.png';
import clsx from 'clsx';
import { Api } from '../../utils/Api';

const tabs = {
    popular: 1,
    upcoming: 2
};


const Categories = () => {
    const [activeTab, setActiveTab] = useState('popular');
    const [data, setData] = useState([]);

    useEffect(() => {
        getMovies();
    }, [activeTab]);

    const getMovies = async () => {
        try {
            const { data } = await Api.get(`/movie/${activeTab}`);
            setData(data.results);
            console.log(data);
        }catch (error) {
            const errorMessage = error.isAxiosError ? error.response.data.status_message : error.message;
            console.error({ errorMessage });
        }
    }

    return (
        <>
            <div className="categories">
                <div className="categories__nav--items">
                    <ul className="nav__links">
                        <li className={clsx('nav__link', tabs[activeTab] === 1 && 'active')} onClick={() => setActiveTab('popular')}>Popular</li>
                        <li className={clsx('nav__link', tabs[activeTab] === 2 && 'active')} onClick={() => setActiveTab('upcoming')}>Upcoming</li>
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