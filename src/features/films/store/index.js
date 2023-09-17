import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  film: [
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
  fetching: false,
  message: null,
};

const videoSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setFetching(state) {
      state.fetching = true;
    },
  },
});

export default videoSlice;
