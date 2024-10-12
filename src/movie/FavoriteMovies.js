import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const FavoriteMovies = ({ onClose, toggleFavorite }) => {
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  return (
    <div>
      <div className="ml-12">
        <button
          className="text-red-500 float-left font-bold underline"
          onClick={onClose}
        >
          Back
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4"></h2>

      {favoriteMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-[250px] mr-[150px]">
          {favoriteMovies.map((movie) => (
            <Card
              key={movie.id}
              card={movie}
              toggleFavorite={toggleFavorite}
              favoriteMovies={favoriteMovies}
            />
          ))}
        </div>
      ) : (
        <p>No favorite movies selected.</p>
      )}
    </div>
  );
};

export default FavoriteMovies;
