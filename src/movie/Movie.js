import SearchBarr from "./SearchBarr.js";
import MovieItem from "./MovieItem.js";
import Pagination from "./Pagination.js";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDetail from "./MovieDetail.js";
import Card from "./Card.js";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux/MovieSlice.js";
import FavoriteMovies from "./FavoriteMovies.js";

const Movie = () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTQ4YmE2OTQ1N2MzMGE1MmY2ZWU5M2I3NDliZWVmZCIsIm5iZiI6MTcyNTEyOTU2OC4xODQ0MDQsInN1YiI6IjY2Y2YyOWI4ZDhlMjFiNTFlZTY5ZjMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MUkVJxSt0ZYNvFLlMHIERrqyhj27j1n52zJKpxwAi7Y";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [listingFlag, setListingFlag] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [showFavorites, setShowFavorites] = useState(false);

  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  const toggleFavorite = (movie) => {
    debugger;
    const isFavorite = favoriteMovies.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (isFavorite) {
      dispatch(removeMovie(movie));
    } else {
      dispatch(addMovie(movie));
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      setData(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const onPageChange = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response", response);
      setData(response.data.results);
      setCurrentPage(page);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    // Function to fetch data from API

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response", response);
        setData(response.data.results);
        setTotalPages(response.data.total_pages);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  function onMovieSelect(card) {
    setListingFlag(false);
    setSelectedMovie(card);
  }
  function onClose() {
    setListingFlag(true);
    setSelectedMovie({});
  }

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };
  function onClose() {
    setListingFlag(true);
    setShowFavorites(false);
  }

  return (
    <div>
      {listingFlag ? (
        <>
          <div className="controls">
            <SearchBarr searchMovies={searchMovies} />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={handleShowFavorites}
            >
              FavoriteMovies
            </button>
          </div>
          {!showFavorites ? (
            <>
              <MovieItem
                loading={loading}
                data={data}
                error={error}
                onMovieSelect={onMovieSelect}
                toggleFavorite={toggleFavorite}
                favoriteMovies={favoriteMovies}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </>
          ) : (
            <FavoriteMovies favoriteMovies={favoriteMovies} onClose={onClose} />
          )}
        </>
      ) : (
        <MovieDetail
          movie={selectedMovie}
          selectedMovie={selectedMovie}
          onClose={onClose}
        />
      )}
      <div className="movie-list">
        {/* Display favorite movies */}
        {/* <div className="favorites-section">
          <h2>Favorite Movie</h2>
          <ul>
            {favoriteMovies.map((favMovie) => (
              <li key={favMovie.id}>{favMovie.title}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Movie;
