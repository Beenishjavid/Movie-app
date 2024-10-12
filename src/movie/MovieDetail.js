import React from "react";
function MovieDetails({ movie, onClose }) {
  return (
    <div className="justify-center">
      <div className="ml-12">
        <button
          className="text-red-500 float-left font-bold underline"
          onClick={onClose}
        >
          Back
        </button>
      </div>
      <div className="flex  grid-cols-1  mt-8 ml-60">
        <div className="col-span-6 p-4 min-h-[500px]  min-w-[400px]   rounded-lg shadow-lg">
          <img
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie?.poster_path}`}
            alt={movie?.title}
            className="h-full w-full "
          />
        </div>
        <div className="col-span-6 ">
          <div class="text-start ml-8 mr-12 gap-4">
            <h2 className="mt-4 text-lg font-bold text-gray-800 mb-4">
              {movie?.title}
            </h2>
            <p className="text-gray-500 mb-4">
              <strong>Release year:</strong> {movie?.release_date}
            </p>
            <p className="text-gray-500 mb-4">
              <strong>Genre:</strong> {movie?.vote_average}
            </p>
            <p className="text-gray-500 mb-4 ">
              <strong>Description:</strong> {movie?.overview}
            </p>
          </div>
        </div>
        {/* <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button> */}
      </div>
    </div>
  );
}

export default MovieDetails;
