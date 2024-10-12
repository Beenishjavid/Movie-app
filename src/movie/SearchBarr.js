import React, { useState } from "react";

const SearchBarr = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearchClick = () => {
    searchMovies(searchTerm);
  };

  return (
    <div className="p-5">
      <div className="justify-center flex">
        <input
          onChange={handleChange}
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          className="block w-[900px] justify-center rounded-full border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={onSearchClick}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBarr;
