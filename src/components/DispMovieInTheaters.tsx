import React from "react";

const DispMovieInTheaters = (props: any) => {
  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.posterurl} alt="movie" key={movie.id}></img>
        </div>
      ))}
    </>
  );
};

export default DispMovieInTheaters;
