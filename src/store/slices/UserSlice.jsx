import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, { payload }) {
      return [...state, payload];
    },
    removeUser(state, { payload }) {
      return state.filter((_, id) => id !== payload);
    },
    clearAllUsers(state, { payload }) {
      return (state = []);
    },
  },
});
