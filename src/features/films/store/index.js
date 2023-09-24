import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [
    {
      id: "tt9664206",
      primaryImage: {
        url: "https://m.media-amazon.com/images/M/MV5BZGMxY2VhZGEtMWUxMS00ODFmLWI5MDctNDc3MzVjZmZhOThlXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_.jpg",
        caption: {
          plainText: "L'acrobate (2019)",
        },
      },
      titleType: {
        text: "Movie",
      },
      titleText: {
        text: "L'acrobate",
      },
      releaseYear: {
        year: 2019,
      },
      releaseDate: {
        year: 2019,
      },
    },
  ],
  filmIds: [],
  fetching: false,
  message: null,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFetching(state) {
      state.fetching = true;
    },
    setCompleted(state, action) {
      state.films = action.payload;
      state.fetching = false;
    },
    setFailed(state, action) {
      state.message = action.payload;
      state.fetching = false;
    },
    reset(state) {
      state = initialState;
    },

    getFilms(state, action) {
      state.films = action.payload;
      state.fetching = false;
    },
    getFilmId(state, action) {
      state.filmIds = action.payload;
      state.fetching = false;
    },
    setFilmId(state, action) {
      state.filmIds = action.payload;
      state.fetching = false;
    },
    setName(state) {
      state.films[0].titleType.plainText = "Itea";
      state.films[0].titleText.text = "Course";
    },
  },
});

export const {
  setFetching,
  setCompleted,
  setFailed,
  reset,
  getFilms,
  setName,
} = filmsSlice.actions;

export default filmsSlice.reducer;
