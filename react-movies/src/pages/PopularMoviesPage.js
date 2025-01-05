import React from 'react';
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import { getPopularMovies } from '../api/tmdb-api';
import AddToFavorites from '../components/cardIcons/addToFavorites'; 

const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('popularMovies',  getPopularMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  
  const movies = data.results;

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavorites movie={movie} /> 
          </>
        );
      }}
    />
  );
};

export default PopularMoviesPage;
