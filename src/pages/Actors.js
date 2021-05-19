import React from 'react';
import '../styles/Actors.css';
import '../styles/Header.css';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import Card3 from '../reuseables/Card3';
import Photo1 from '../images/Photo1.png';
import Photo2 from '../images/Photo2.png';
import Photo3 from '../images/Photo3.png';
import Photo4 from '../images/Photo4.png';
import Photo5 from '../images/Photo5.png';
import Photo6 from '../images/Photo6.png';
import Card2 from '../reuseables/Card2'
import SherlockHolmes from '../images/SherlockHolmes.png';
import CivilWar from '../images/CivilWar.png';
import IronMan from '../images/IronMan.png';
import Avengersss from '../images/Avengersss.png';
import splitName from '../helpers/splitName';


const Actors = () => {
    const [firstname, others] = splitName('Robert Downey Jr');

    return (
        <section className="container actors">
            <header className="actors__header">
                <Header 
                    title="Top Actors"
                    subtitle="Movies By Actors"
                /> 
                <PageButtons />
            </header>

            <div className="actors__card">
                <Card3 image={Photo1} text="Jason Statham" />
                <Card3 image={Photo2} text="Robert Downey Jr." />
                <Card3 image={Photo3} text="Deepika Padukone" />
                <Card3 image={Photo4} text="Varun Dhawan" />
                <Card3 image={Photo5} text="Allu Arjun" />
                <Card3 image={Photo6} text="Jessica Alba" />
            </div>
                
            <section className="featured-actor">            
                <div className="featured-actor__nav--items">
                    <h2 className="nav__link active">Movies</h2>
                    <PageButtons />
                </div>
                <div className="featured-actor__content">
                    <div className="featured-actor__texts">
                        <h2 className="title">
                            <span>{firstname}</span>
                            <span>{others}</span>
                        </h2>
                        <p className="texts">The past for me was 30 years of dependency, depravity, and despair …. otherwise known as ‘An Actor Prepares!</p>
                        <span className="link">View Robert Biography</span>
                    </div>
                    <div className="featured-actor__items">  
                        <div className="featured-actor__card">
                            <Card2  image={IronMan} />
                            <Card2 image={Avengersss} />
                            <Card2 image={CivilWar} />
                            <Card2 image={SherlockHolmes} />   
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )

}

export default Actors;