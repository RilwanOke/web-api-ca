import React from 'react';
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import { getUpcomingMovies } from '../api/tmdb-api';
import AddToFavorites from '../components/cardIcons/addToFavorites'; 

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcomingMovies', getUpcomingMovies, {
   
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavorites movie={movie} />
        </>
      )}
    />
  );
};

export default UpcomingMoviesPage;
