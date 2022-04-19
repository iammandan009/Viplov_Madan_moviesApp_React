import { spawn } from "child_process";
import { join } from "path";
import React from "react";

const ShowMovieDetails = (props: any) => {
  const collapseMovieDetails = () => {
    console.log("inside collapse details");
    props.setShowMovieDetails(true);

    props.setShowMovies(true);
    props.setFav(false);
    props.setShowMovieInTheatres(false);
    props.setShowTopRatedIndian(false);
    props.setShowTopRated(false);
    props.setShowTopRatedInTheaters(false);
  };

  return (
    <span className="movieDetailsDisplay">
      <img src={props.movie.posterurl} alt="movie image" />
      <span className="movieDetailsDisplayInner">
        Titile: {props.movie.title}
        <br />
        Content Rating: {props.movie.contentRating}
        <br />
        Genres: {props.movie.genres.join()}
        <br />
        Release Year: {props.movie.year}
        <br />
        Story Line: {props.movie.storyline}
        <br />
        Actors: {props.movie.actors.join()}
      </span>
    </span>
  );
};

export default ShowMovieDetails;
