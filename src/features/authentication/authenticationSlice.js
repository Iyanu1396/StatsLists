import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: null,
    isLoggedIn: false,
    isLoading: false,
    token: "",
    CLIENT_ID: "036356fa84574cff91cb6272bb50ed3e",
    REDIRECT_URI: "http://localhost:5173/app",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
  },
  reducers: {
    login: (state) => {
      (state.isLoggedIn = true),
        (window.location = `${state.AUTH_ENDPOINT}?client_id=${state.CLIENT_ID}&redirect_uri=${state.REDIRECT_URI}&response_type=${state.RESPONSE_TYPE}&scope=user-read-private user-read-email`);
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    authenticateUser: (state, action) => {
      state.userData = action.payload;
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, setToken, authenticateUser , setIsloading } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
