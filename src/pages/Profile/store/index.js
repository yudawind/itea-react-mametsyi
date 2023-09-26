import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "1",
    img: "http://yuriy.itaw.org/ava/20230816_202538.jpg",
    name: "Юрій Мамецький",
    description: "Професійний ІТ-спеціаліст та програміст",
  },

  fetching: false,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFetching(state) {
      state.fetching = true;
    },
    setCompleted(state, action) {
      state.user = action.payload;
      state.fetching = false;
    },
    setFailed(state, action) {
      state.message = action.payload;
      state.fetching = false;
    },
    reset(state) {
      state = initialState;
    },

    getUser(state, action) {
      state.user = action.payload;
      state.fetching = false;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
