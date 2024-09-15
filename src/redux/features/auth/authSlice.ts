import { createSlice } from "@reduxjs/toolkit";

type TAuthUser = {
  user: null | {
    firstName: string;
    lastName: string;
    email: string;
  };
  token: null | string;
  refreshToken: null | string;
};

const initialState: TAuthUser = {
  user: null,
  token: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },

    loginUser: (state, action) => {
      const { user, token, refreshToken } = action.payload;
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
    },

    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
