import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // hit TMDB Discover get movie endpoint to get the movies data
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=13df8c0093657869b2d75e9a6b6fffd2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then(response => response.json())
    .then(data => setMovies(data.results));

    // eslint-disable-next-line
  }, []);

  const  handleSubmit = (e) => {
    e.preventDefault();

    // hit TMDB Rest API endpoint to search for a movie
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=13df8c0093657869b2d75e9a6b6fffd2&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => setMovies(data.results));

    setText('');
  }

  const handleChange = (e) => {setText(e.target.value)};

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <h2>Search Movie</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" onChange={handleChange} value={text} />
          </form>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

          { movies.map(movie => <MovieItem key={movie.id} movie={movie} />) }
              
          </div>
      </div>
  </section>
  );
}

export default Movies;
