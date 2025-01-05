import React, { useEffect, useState } from 'react';
import { getMovieCredits }from "../../api/tmdb-api"; 

const MovieCredits = ({ movieId }) => {
  const [credits, setCredits] = useState({ cast: [], crew: [] });

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setCredits({ cast: data.cast, crew: data.crew });
      })
      .catch(error => {
        console.error('Failed to get credits:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Credits</h2>
      <h3>Cast</h3>
      <ul>
        {credits.cast.map(member => (
          <li key={member.cast_id}>{member.name} as {member.character}</li>
        ))}
      </ul>
      <h3>Crew</h3>
      <ul>
        {credits.crew.map(member => (
          <li key={member.credit_id}>{member.name} - {member.job}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCredits;
