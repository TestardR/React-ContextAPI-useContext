import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: 'Happy Potter',
      price: '$10',
      id: 1
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 2
    },
    {
      name: 'Inception',
      price: '$10',
      id: 3
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
