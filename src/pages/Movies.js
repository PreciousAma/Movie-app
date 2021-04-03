import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Movies = () => {
  return (
    <Carousel>
      <div>Movies</div>
      <div>Actors</div>
      <div>Shows</div>
    </Carousel>
  );
}

export default Movies;
