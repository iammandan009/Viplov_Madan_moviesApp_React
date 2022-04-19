import React from "react";
import FavouriteList from "./FavouritesList";

function Greeting(props: any) {
  const isLoggedIn = props.showFav;
  if (isLoggedIn) {
    return <FavouriteList movies={props.movies} />;
  }
  return <div></div>;
}

export default Greeting;
