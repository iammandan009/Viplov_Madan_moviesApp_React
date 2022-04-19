import React from "react";
import DispMovieDetails from "./DispMovieDetails";
import ShowMovieDetails from "./ShowMovieDetails";

const MovieList = (props: any) => {
  const FavouriteComponent = props.FavouriteComponent;

  const ShowDetails = (movie: any) => {
    props.setShowMovieDetails(true);
    props.setMovieDetailsInfo(movie);
    props.setShowMovies(false);
    props.setFav(false);
    props.setShowMovieInTheatres(false);
    props.setShowTopRatedIndian(false);
    props.setShowTopRated(false);
    props.setShowTopRatedInTheaters(false);
  };

  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img
            src={movie.posterurl}
            alt="movie"
            key={movie.id}
            onClick={() => ShowDetails(movie)}
          ></img>
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
