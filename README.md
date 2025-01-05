# Assignment 2 - Web API.

Name: Rilwan Oke

## Features.

User Authentication: Implemented Firebase Authentication for signup, login, and logout with both Google Auth and email/password.
Search: Added a search endpoint that allows filtering movies by title, genre, and rating.
Upcoming Movies Endpoint: A custom endpoint to fetch upcoming movies from TMDB.
Adjusted the Error Handling
## Setup requirements.

Run Mongod on the terminal.

## API Configuration

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/search | GET | Seraches for movies
 - /api/movies/upcoming | GET | Retrieves upcoming movies from TMDB.
- /api/movies/{movieid} | GET | Gets a single movie  


## Security and Authentication


Authentication: The API uses Firebase Authentication for secure access to protected routes. Users can authenticate using Google Auth or email/password.

## Integrating with React App

The following views in the React app integrate with the custom movie API

Discover Movies: Fetches a  list of movies from /api/movies.
Search Movies: Allows users to search movies by title, genre, or rating using /api/movies/search.

Favorites Page: Displays user-specific favorite movies by fetching data from /api/movies/favorites.

Upcoming Movies Page: Fetches upcoming movies from /api/movies/upcoming.

Authentication Integration: Users can log in or sign up via the user icon in the header.

## Independent learning (if relevant)

Firebase Integration: Learned how to integrate Firebase Authentication (Google OAuth and email/password) with both the backend and React app.