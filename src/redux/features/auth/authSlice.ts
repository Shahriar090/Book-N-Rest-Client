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
    userRegister: (state, action) => {
      const { user } = action.payload;
      console.log("User from slice", user);
      state.user = user;
    },

    userLogin: (state, action) => {
      const { user, token, refreshToken } = action.payload;
      state.user = user;
      state.token = token;
      state.refreshToken = refreshToken;
    },

    userLogout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
    },
  },
});

export const { userRegister, userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
