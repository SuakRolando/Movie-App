import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Movies from '../components/Movies';
import Footer from '../components/Footer';

const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <Movies />
      <Footer />
    </>
  );
}

export default Home;
