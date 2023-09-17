import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/films/store";

const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});

export default store;
