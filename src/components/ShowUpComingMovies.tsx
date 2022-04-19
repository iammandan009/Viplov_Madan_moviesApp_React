import React from "react";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import MovieList from "./MovieList";
import AddtoFavourites from "./AddToFavourites";
import FavouriteList from "./FavouritesList";
import MovieInTheatersList from "./MovieInTheatersList";
import ShowMovieDetails from "./ShowMovieDetails";

function ShowUpComingMovies(props: any) {
  const isLoggedIn = props.showMovies;
  function search(rows: any) {
    return rows.filter((row: any) =>
      row.title.toLowerCase().includes(props.searchValue.toLowerCase())
    );
  }

  const addFavouriteMovie = (movie: never) => {
    const newFavouriteList = [...props.Favourites, movie];
    props.persistFavourities(movie);
    props.setFavourites(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <span>
        <MovieListHeading
          heading="Movies"
          setFav={props.setFav}
          setShowMovies={props.setShowMovies}
          Favourites={props.Favourites}
          showFav={props.showFav}
          showMovies={props.showMovies}
          showMovieInTheatres={props.showMovieInTheatres}
          movieInTheatres={props.movieInTheatres}
          setShowMovieInTheatres={props.setShowMovieInTheatres}
          setMovieInTheatres={props.setMovieInTheatres}
          topRatedIndian={props.topRatedIndian}
          setTopRatedIndian={props.setTopRatedIndian}
          showTopRatedIndian={props.showTopRatedIndian}
          setShowTopRatedIndian={props.setShowTopRatedIndian}
          topRated={props.topRated}
          setTopRated={props.setTopRated}
          showTopRated={props.showTopRated}
          setShowTopRated={props.setShowTopRated}
          topRatedInTheaters={props.topRatedInTheaters}
          setTopRatedInTheaters={props.setTopRatedInTheaters}
          showTopRatedInTheaters={props.showTopRatedInTheaters}
          setShowTopRatedInTheaters={props.setShowTopRatedInTheaters}
          setShowMovieDetails={props.setShowMovieDetails}
        />

        <SearchBox
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </span>

      <div className="movieGrid">
        {/* //'col-lg-4 d-flex'> */}
        {isLoggedIn ? (
          <MovieList
            movies={search(props.movies)}
            FavouriteComponent={AddtoFavourites}
            handleFavouritesClick={addFavouriteMovie}
            setShowMovieDetails={props.setShowMovieDetails}
            setMovieDetailsInfo={props.setMovieDetailsInfo}
            ShowMovieDetails={props.ShowMovieDetails}
            MovieDetailsInfo={props.MovieDetailsInfo}
            setTopRatedIndian={props.setTopRatedIndian}
            setShowMovieInTheatres={props.setShowMovieInTheatres}
            setFav={props.setFav}
            setShowMovies={props.setShowMovies}
            setShowTopRatedInTheaters={props.setShowTopRatedInTheaters}
            setShowTopRatedIndian={props.setShowTopRatedIndian}
            setShowTopRated={props.setShowTopRated}
          />
        ) : null}
      </div>
      {/* <div className='movieGrid'>
              {props.showMovieinTheatres?<MovieList movies={search(props.movieInTheatres)} 
                FavouriteComponent={AddtoFavourites}
                handleFavouritesClick={addFavouriteMovie}/>:null}
                
							
			</div> */}

      <div className="movieGrid">
        {props.showTopRatedIndian ? (
          <MovieList
            movies={search(props.topRatedIndian)}
            FavouriteComponent={AddtoFavourites}
            handleFavouritesClick={addFavouriteMovie}
            setShowMovieDetails={props.setShowMovieDetails}
            setMovieDetailsInfo={props.setMovieDetailsInfo}
            ShowMovieDetails={props.ShowMovieDetails}
            MovieDetailsInfo={props.MovieDetailsInfo}
            setShowMovies={props.setShowMovies}
            setTopRatedIndian={props.setTopRatedIndian}
            setShowMovieInTheatres={props.setShowMovieInTheatres}
            setFav={props.setFav}
            setShowTopRatedInTheaters={props.setShowTopRatedInTheaters}
            setShowTopRatedIndian={props.setShowTopRatedIndian}
            setShowTopRated={props.setShowTopRated}
          />
        ) : null}
      </div>

      <div className="movieGrid">
        {props.showTopRated ? (
          <MovieList
            movies={search(props.topRated)}
            FavouriteComponent={AddtoFavourites}
            handleFavouritesClick={addFavouriteMovie}
            setShowMovieDetails={props.setShowMovieDetails}
            setMovieDetailsInfo={props.setMovieDetailsInfo}
            ShowMovieDetails={props.ShowMovieDetails}
            MovieDetailsInfo={props.MovieDetailsInfo}
            setShowMovies={props.setShowMovies}
            setTopRatedIndian={props.setTopRatedIndian}
            setShowMovieInTheatres={props.setShowMovieInTheatres}
            setFav={props.setFav}
            setShowTopRatedInTheaters={props.setShowTopRatedInTheaters}
            setShowTopRatedIndian={props.setShowTopRatedIndian}
            setShowTopRated={props.setShowTopRated}
          />
        ) : null}
      </div>

      <div className="movieGrid">
        {props.showTopRatedInTheaters ? (
          <MovieList
            movies={search(props.topRatedInTheaters)}
            FavouriteComponent={AddtoFavourites}
            handleFavouritesClick={addFavouriteMovie}
            setShowMovieDetails={props.setShowMovieDetails}
            setMovieDetailsInfo={props.setMovieDetailsInfo}
            ShowMovieDetails={props.ShowMovieDetails}
            MovieDetailsInfo={props.MovieDetailsInfo}
            setShowMovies={props.setShowMovies}
            setTopRatedIndian={props.setTopRatedIndian}
            setShowMovieInTheatres={props.setShowMovieInTheatres}
            setFav={props.setFav}
            setShowTopRatedInTheaters={props.setShowTopRatedInTheaters}
            setShowTopRatedIndian={props.setShowTopRatedIndian}
            setShowTopRated={props.setShowTopRated}
          />
        ) : null}
      </div>
    </div>
  );
}

export default ShowUpComingMovies;
