import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
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
