import React from "react";
import FavouriteList from "./FavouritesList";
import MovieList from "./MovieList";

const MovieListHeading = (props: any) => {
  return (
    <>
      <a
        className="aTag"
        href="#"
        onClick={() => {
          props.setShowMovies(false);
          props.setShowMovieDetails(false);
          props.setFav(false);
          props.setShowMovieInTheatres(false);
          props.setShowTopRatedIndian(false);
          props.setShowTopRated(false);
          props.setShowTopRatedInTheaters(true);
        }}
      >
        Movies In Theaters
      </a>

      <span className="col, headingDiv">
        <a
          className="aTag"
          href="#"
          onClick={() => {
            props.setShowMovies(true);
            props.setFav(false);
            props.setShowMovieInTheatres(false);
            props.setShowTopRatedIndian(false);
            props.setShowTopRated(false);
            props.setShowTopRatedInTheaters(false);
          }}
        >
          Coming Soon
        </a>

        <a
          className="aTag"
          href="#"
          onClick={() => {
            props.setShowMovies(false);
            props.setShowMovieDetails(false);
            props.setFav(false);
            props.setShowMovieInTheatres(false);
            props.setShowTopRatedIndian(true);
            props.setShowTopRated(false);
            props.setShowTopRatedInTheaters(false);
          }}
        >
          Top Rated Indian
        </a>

        <a
          className="aTag"
          href="#"
          onClick={() => {
            props.setShowMovies(false);
            props.setShowMovieDetails(false);
            props.setFav(false);
            props.setShowMovieInTheatres(false);
            props.setShowTopRatedIndian(false);
            props.setShowTopRated(true);
            props.setShowTopRatedInTheaters(false);
          }}
        >
          Top Rated Movies
        </a>

        <a
          className="aTag"
          href="#"
          onClick={() => {
            props.setShowMovies(false);
            props.setShowMovieDetails(false);
            props.setFav(true);
            props.setShowMovieInTheatres(false);
            props.setShowTopRatedIndian(false);
            props.setShowTopRated(false);
            props.setShowTopRatedInTheaters(false);
          }}
        >
          Favourites
        </a>
      </span>
    </>
  );
};

export default MovieListHeading;
