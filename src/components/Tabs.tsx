import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import AddtoFavourites from "./AddToFavourites";
import FavouriteList from "./FavouritesList";
import axios from "axios";
import "../App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowMyMovies from "./ShowMyFavMovies";
import ShowUpComingMovies from "./ShowUpComingMovies";
import DispMovieInTheaters from "./DispMovieInTheaters";
import RemoveFavourites from "./RemoveFavourites";
import ShowMovieDetails from "./ShowMovieDetails";

export const Tabs = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showFav, setFav] = useState(false);
  const [Favourites, setFavourites] = useState([]);
  const [showMovies, setShowMovies] = useState(true);
  const [movieInTheatres, setMovieInTheatres] = useState([]);
  const [showMovieInTheatres, setShowMovieInTheatres] = useState(false);
  const [searchMovieInTheaters, setSearchMovieInTheaters] = useState("");
  const [topRatedIndian, setTopRatedIndian] = useState([]);
  const [showTopRatedIndian, setShowTopRatedIndian] = useState(false);
  const [topRated, setTopRated] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [topRatedInTheaters, setTopRatedInTheaters] = useState([]);
  const [showTopRatedInTheaters, setShowTopRatedInTheaters] = useState(false);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [movieDetailsInfo, setMovieDetailsInfo] = useState([]);

  const getMovieRequest = async (searchValue: any) => {
    const url = `http://localhost:4000/movies-coming`;

    const response = await axios.get(url).then((response) => {
      setMovies(response.data);
    });
    //const responseData = response.data;
  };

  const getMovieInTheatres = async (searchValue: any) => {
    const url = `http://localhost:4000/movies-in-theaters`;

    const response = await axios.get(url).then((response) => {
      setMovieInTheatres(response.data);
    });
    //const responseData = response.data;
  };

  const getTopRatedIndian = async (searchValue: any) => {
    const url = `http://localhost:4000/top-rated-india`;

    const response = await axios.get(url).then((response) => {
      setTopRatedIndian(response.data);
    });
    //const responseData = response.data;
  };

  const getTopRated = async (searchValue: any) => {
    const url = `http://localhost:4000/top-rated-movies`;

    const response = await axios.get(url).then((response) => {
      setTopRated(response.data);
    });
    //const responseData = response.data;
  };

  const getTopRatedInTheaters = async (searchValue: any) => {
    const url = `http://localhost:4000/movies-in-theaters`;

    const response = await axios.get(url).then((response) => {
      setTopRatedInTheaters(response.data);
    });
    //const responseData = response.data;
  };

  const persistFavourities = async (item: []) => {
    const request = { ...item };
    axios.post(`http://localhost:4000/favourit`, request);
  };

  const deletepersistFavourities = async (id: any) => {
    axios.delete(`http://localhost:4000/favourit/${id}`);
  };

  const getpersistedMovies = async () => {
    const url = `http://localhost:4000/favourit`;

    const response = await axios.get(url).then((response) => {
      // const ArrayData= JSON.parse(response.data);

      setFavourites(response.data);
    });
    //const responseData = response.data;
  };

  useEffect(() => {
    getMovieRequest(searchValue);
    getTopRatedIndian(searchValue);
    getTopRated(searchValue);
    getTopRatedInTheaters(searchValue);
  }, [
    searchValue,
    showFav,
    showMovies,
    showMovieInTheatres,
    showTopRatedIndian,
    showTopRated,
    Favourites,

    showTopRatedInTheaters,
  ]);

  useEffect(() => {
    getpersistedMovies();
  }, []);

  function search(rows: any) {
    return rows.filter((row: any) =>
      row.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  //   const markFavourites =(movie:any)=>
  //   {
  //       const newFavourite = [... Favourites, movie];
  // 	  setFavourites(newFavourite;

  //   }

  const addFavouriteMovie = (movie: never) => {
    const newFavouriteList = [...Favourites, movie];

    persistFavourities(movie);
    setFavourites(newFavouriteList);
  };

  return (
    <>
      <div>
        <ShowUpComingMovies
          showFav={showFav}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          search={search}
          movies={movies}
          AddToFavourites={AddtoFavourites}
          addFavouriteMovie={addFavouriteMovie}
          Favourites={Favourites}
          setFavourites={setFavourites}
          setFav={setFav}
          setShowMovies={setShowMovies}
          showMovies={showMovies}
          showMovieInTheatres={showMovieInTheatres}
          movieInTheatres={movieInTheatres}
          setShowMovieInTheatres={setShowMovieInTheatres}
          setSearchMovieInTheaters={setSearchMovieInTheaters}
          searchMovieInTheaters={searchMovieInTheaters}
          setMovieInTheatres={setMovieInTheatres}
          topRatedIndian={topRatedIndian}
          setTopRatedIndian={setTopRatedIndian}
          showTopRatedIndian={showTopRatedIndian}
          setShowTopRatedIndian={setShowTopRatedIndian}
          topRated={topRated}
          setTopRated={setTopRated}
          showTopRated={showTopRated}
          setShowTopRated={setShowTopRated}
          topRatedInTheaters={topRatedInTheaters}
          setTopRatedInTheaters={setTopRatedInTheaters}
          showTopRatedInTheaters={showTopRatedInTheaters}
          setShowTopRatedInTheaters={setShowTopRatedInTheaters}
          persistFavourities={persistFavourities}
          setShowMovieDetails={setShowMovieDetails}
          setMovieDetailsInfo={setMovieDetailsInfo}
          ShowMovieDetails={showMovieDetails}
          MovieDetailsInfo={movieDetailsInfo}
        />
      </div>

      <span id="showFav">
        {showFav ? (
          <FavouriteList
            movies={Favourites}
            RemoveFavourites={RemoveFavourites}
            setFavourites={setFavourites}
            persistFavourities={persistFavourities}
            deletepersistFavourities={deletepersistFavourities}
          />
        ) : null}
      </span>

      <span id="showFav">
        {showMovieDetails ? (
          <ShowMovieDetails
            movie={movieDetailsInfo}
            setShowMovieInTheatres={setShowMovieInTheatres}
            setFav={setFav}
            setShowMovies={setShowMovies}
            setShowTopRatedInTheaters={setShowTopRatedInTheaters}
            setShowTopRatedIndian={setShowTopRatedIndian}
            setShowTopRated={setShowTopRated}
          />
        ) : null}
      </span>

      {/* <span id='showFav'>{showTopRatedIndian?<DispMovieInTheaters movies={topRatedIndian}/>:null}</span>
		<span id='showFav'>{showTopRatedIndian?<DispMovieInTheaters movies={topRatedIndian}/>:null}</span>
		<span id='showFav'>{showTopRated?<DispMovieInTheaters movies={topRated}/>:null}</span>
		<span id='showFav'>{showTopRatedIndian?<DispMovieInTheaters movies={topRatedInTheaters}/>:null}</span> */}
    </>
  );
};
