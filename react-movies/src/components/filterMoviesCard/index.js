import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const ratingOptions = [
  { id: 'all', name: 'All Ratings' },
  { id: '1', name: '1+' },
  { id: '2', name: '2+' },
  { id: '3', name: '3+' },
  { id: '4', name: '4+' },
  { id: '5', name: '5+' },
  { id: '6', name: '6+' },
  { id: '7', name: '7+' },
  { id: '8', name: '8+' },
  { id: '9', name: '9+' }
];

const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)"
};

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  const [rating, setRating] = useState('all');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    props.onUserInput('rating', event.target.value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  let genres = data.genres || [];
  if (!genres.some(genre => genre.id === "0")) {
    genres = [{ id: "0", name: "All" }, ...genres];
  }

  const handleTextChange = (e) => {
    props.onUserInput("name", e.target.value);
  };

  const handleGenreChange = (e) => {
    props.onUserInput("genre", e.target.value);
  };

  return (
    <Card sx={{ backgroundColor: "rgb(204, 204, 0)" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={formControl}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            id="rating-select"
            value={rating}
            onChange={handleRatingChange}
          >
            {ratingOptions.map((option) => (
              <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={img} title="Filter" />
    </Card>
  );
}
