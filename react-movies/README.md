# Assignment 1 - ReactJS app.

Name: Rilwan Oke

## Overview.

This react movie app is an app for movie lovers to explore. Users can view details about different movies, including overviews, cast and crew credits, and user reviews. The app features several sections such as Home, Favorites, Popular, and Upcoming movies, enhancing user interaction by allowing them to save favorites and stay updated with new and popular titles. Additionally, it has features like movie recommendations and advanced filtering options, including sorting by  and ratings. The app also supports third-party authentication with Firebase, enabling a secure and personalized user experience.

### Features.

+ Popular Movies Page
Added a dedicated page to display movies categorized as "Popular" fetched from the TMDB API.

+ Upcoming Movies Page
Created a page to showcase movies scheduled for upcoming releases, providing users with a preview of what's next in cinemas.

+ Ratings Filter
Implemented a filtering option allowing users to sort and filter movies based on their ratings.

+ Log-In Feature
Integrated Firebase Authentication to enable user login functionality, supporting Google sign-in for a seamless and secure user experience.

+ Recommendations Section
Added a recommendations feature to display movies related to the one currently being viewed, enhancing the user experience with personalized suggestions.

+ Movie Credits Display
Implemented a feature to showcase cast and crew information for a selected movie


## Setup requirements.

N/A

## API endpoints.

+ Popular Movies - /movie/popular
Retrieves a list of the most popular movies currently.

+ Upcoming Movies - /movie/upcoming
Fetches a list of movies that are scheduled to be released soon.

+ Movie Credits - /movie/:id/credits
Provides a list of cast and crew for a specific movie.

+ Movie Recommendations - /movie/:id/recommendations
Returns a list of recommended movies based on a specific movie.

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/popular - Displays a list of the most popular movies.

+ /movies/upcoming - Shows movies that are scheduled for upcoming release.



## Independent learning (If relevant).
One of the major things that I had to learn for this project was how to use the whole firebase system for thrid party authentication so I had to learn that by mysself and how to insert it into my project to make it work successfully such as making a firebase-config file adding it to the env files. So i had to look up rescoures on how to implement and add it https://samuelbankole.medium.com/google-firebase-in-react-1acc64516788 https://firebase.google.com/docs/web/setup. Another page I used for tips was the main react website https://react.dev/versions. https://blog.bitsrc.io/mastering-react-techniques-to-take-your-ui-to-the-next-level-a5002173904f, https://mui.com/material-ui/getting-started/, https://developer.themoviedb.org/reference/intro/getting-started, https://javascript.info/, https://css-tricks.com/ help with some css throughout and 
