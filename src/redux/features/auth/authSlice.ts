import { createSlice } from "@reduxjs/toolkit";

type TAuthUser = {
  user: null | {
    firstName: string;
    lastName: string;
    email: string;
  };
  accessToken: null | string;
  refreshToken: null | string;
};

const initialState: TAuthUser = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegister: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },

    userLogin: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },

    userLogout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { userRegister, userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
