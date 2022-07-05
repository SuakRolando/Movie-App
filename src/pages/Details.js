import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MovieDetails from '../components/MovieDetails';


const Details = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    // hit TMDB endpoint to get details of a movie
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=13df8c0093657869b2d75e9a6b6fffd2&language=en-US`)
    .then(response => response.json())
    .then(data => setMovie(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <MovieDetails movie={movie} />
      <Footer />
    </>
  );
}

export default Details;
