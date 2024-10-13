import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TAuthUser = {
  user: null | {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    isAdmin: boolean;
    avatarImage: string;
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

    updatedUser: (state, action) => {
      const updatedData = action.payload.user;
      // Merge the existing user data with the updated data
      if (state.user) {
        state.user = {
          ...state.user, // retain existing properties
          ...updatedData, // overwrite properties with the new data
        };
      }
    },
  },
});

export const { userRegister, userLogin, userLogout, updatedUser } =
  authSlice.actions;

export default authSlice.reducer;

export const getCurrentToken = (state: RootState) => state.auth.accessToken;
export const getCurrentUser = (state: RootState) => state.auth.user;
