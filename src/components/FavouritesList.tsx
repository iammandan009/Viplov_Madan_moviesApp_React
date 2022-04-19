import { disconnect } from "process";
import React from "react";
import RemoveFavourites from "./RemoveFavourites";

const FavouriteList = (props: any) => {
  const RemoveFavourites = (movie: any) => {
    const newFavouriteList = props.movies.filter(
      (favourite: any) => favourite.id !== movie.id
    );

    props.setFavourites(newFavouriteList);
    props.deletepersistFavourities(movie.id);
  };

  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.posterurl} alt="movie" key={movie.id}></img>
          <div
            className="overlay d-flex align-items-center justify-content-center, ShowFav"
            style={{ width: "fit-content" }}
            onClick={() => RemoveFavourites(movie)}
          >
            <span
              className="mr-2"
              style={{
                color: "red",
                backgroundColor: "black",
                width: "fit-content",
              }}
            >
              Remove from favourites
            </span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-x-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default FavouriteList;
