import React from 'react';
import Navigation from './components/Navigation';
import MoviesCarousel from './pages/MoviesCarousel';
import Movies from './pages/Movies';
import Actors from './pages/Actors';
import Footer from './pages/Footer'

function App() {
  return (
    <>
      <Navigation />
      <MoviesCarousel />
      <Movies />
      <Actors />
      <Footer />
    </>
  );
}

export default App;
