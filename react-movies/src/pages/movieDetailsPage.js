import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { getMovie } from '../api/tmdb-api';
import Spinner from '../components/spinner';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { Box, Container, Typography, Button } from "@mui/material";
import MovieCredits from "../components/movieCredits";
import MovieRecommendations from "../components/movieRecommendations";

const MoviePage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(["movie", { id }], getMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  return (
    <Container>
      {movie ? (
        <Box sx={{ my: 2 }}>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <MovieCredits movieId={movie.id} />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Watch Trailer
            </Button>
          </PageTemplate>
        </Box>
      ) : (
        <Typography variant="h6">Waiting for movie details...</Typography>
      )}
    </Container>
  );
};

export default MoviePage;
