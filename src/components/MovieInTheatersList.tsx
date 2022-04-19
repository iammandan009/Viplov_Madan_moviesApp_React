import React from "react";

const MovieInTheatersList = (props: any) => {
  const FavouriteComponent = props.FavouriteComponent;

  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.posterurl} alt="movie" key={movie.id}></img>
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

export default MovieInTheatersList;
