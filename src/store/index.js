import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../features/films/store";
import userReducer from "../pages/Profile/store";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    user: userReducer,
  },
});

export default store;
