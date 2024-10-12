import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    favoriteMovies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
    setMovies: (state, action) => {
      state.allMovies = action.payload;
    },
  },
});

export const { addMovie, removeMovie, setMovies } = movieSlice.actions;

export default movieSlice.reducer;
