import Card from "./Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

function MovieItem({
  loading,
  error,
  data,
  onMovieSelect,
  toggleFavorite,
  favoriteMovies,
}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-[250px] mr-[150px]">
        {data.map((card) => (
          <Card
            key={card.id}
            card={card}
            onMovieSelect={onMovieSelect}
            toggleFavorite={toggleFavorite}
            favoriteMovies={favoriteMovies}
          />
        ))}
      </div>
    </div>
  );
}
export default MovieItem;
