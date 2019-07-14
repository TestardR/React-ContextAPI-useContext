import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>This is my movie list</h3>
      <h4>I have {movies.length} movies</h4>
    </div>
  );
};

export default Nav;
