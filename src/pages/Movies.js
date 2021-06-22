import React from 'react';
import Header from '../reuseables/Header';
import PageButtons from '../reuseables/PageButtons';
import '../styles/Movies.css';
import Card from '../reuseables/Card';
import Aquaman from '../images/Aquaman.png';
import Avatar from '../images/Avatar.png';
import Pirates from '../images/Pirates.png';
import Card2 from '../reuseables/Card2';
import Kesari from '../images/Kesari.png';
import Manikarnika from '../images/Manikarnika.png';
import Uri from '../images/Uri.png';
import Singham from '../images/Singham.png';
import Thackeray from '../images/Thackeray.png';

const Movies = () => {
    return (
        <div className="container movies">
            <header className="movies__header">
                <Header
                    title='TOP RATED'
                    subtitle='RECOMMENDED MOVIES'
                />
                <PageButtons />
            </header>

            <div className="cards">
                <Card image={Aquaman} title="AQUAMAN" subtext="Aquaman is a 2018 American superhero film based on the DC Comics character of the same ..... For the sequence, the actors were shot in a pool of water against blue screen backgrounds, with Digital Domain adding CG extensions, waterfalls" />
                <Card image={Avatar} title="AVATAR" subtext="Aquaman is a 2018 American superhero film based on the DC Comics character of the same ..... For the sequence, the actors were shot in a pool of water against blue screen backgrounds, with Digis" />
                <Card image={Pirates} title="PIRATES OF CARIBBEAN" subtext="Aquaman is a 2018 American superhero film based on the DC Comics character of the same ..... For the sequence, the actors were shot." />     
            </div>
            <div className="categories">
                <div className="categories__nav--items">
                    <ul className="nav__links">
                        <li className="nav__link active">Latest</li>
                        <li className="nav__link">Popular</li>
                        <li className="nav__link">Upcoming</li>
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
        </div>
    )
}

export default Movies;
