import React, { useEffect, useState } from 'react';
import { getMovieRecommendations } from "../../api/tmdb-api";
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const MovieRecommendations = ({ movieId }) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (!movieId) return;

        getMovieRecommendations(movieId)
            .then(data => {
                setRecommendations(data.results);
            })
            .catch(() => {
                setRecommendations([]);
            });
    }, [movieId]);

    return (
        <div>
            <Typography variant="h4" gutterBottom>Recommendations</Typography>
            <List>
                {recommendations.map(movie => (
                    <ListItem key={movie.id} divider>
                        <ListItemText primary={movie.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default MovieRecommendations;
