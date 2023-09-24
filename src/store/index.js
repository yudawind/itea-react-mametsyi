import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../features/films/store";

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;
