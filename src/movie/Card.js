import React from "react";
import FavoriteIcon from "./FavoriteIcon";
function Card({
  onMovieSelect,
  card,
  isFavorited,
  toggleFavorite,
  movie,
  favoriteMovies,
}) {
  const { title = "", poster_path: image = "", id } = card || {};
  return (
    <div className="w-[150px] h-full py-2 rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${image}`}
        alt={title}
        onClick={() => onMovieSelect(card)}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
        {/* <p className="text-gray-700 text-base">{description}</p> */}
      </div>
      <div>
        <h1>favrt</h1>
        <FavoriteIcon
          isFavorited={favoriteMovies?.some((movie) => movie?.id == id)}
          toggleFavorite={() => toggleFavorite(card)}
        />
      </div>
    </div>
  );
}
export default Card;
