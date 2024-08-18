import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    userData: null,
    isLoggedIn: false,
    isLoading: false,
    token: "",
    CLIENT_ID: "036356fa84574cff91cb6272bb50ed3e",
    REDIRECT_URI: "https://stats-lists.vercel.app/menu",
    AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
    RESPONSE_TYPE: "token",
     SCOPES : 'user-read-private user-read-email user-top-read playlist-modify-public playlist-modify-private'
  },
  reducers: {
    login: (state) => {
      (state.isLoggedIn = true),
      window.location = `${state.AUTH_ENDPOINT}?client_id=${state.CLIENT_ID}&redirect_uri=${state.REDIRECT_URI}&response_type=${state.RESPONSE_TYPE}&scope=${encodeURIComponent(state.SCOPES)}`
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    authenticateUser: {
      prepare(userName , userEmail , userID , userAvatar){
        return{
         
          payload:{userName,userEmail,userID,userAvatar}
        }
      },
      reducer(state, action){
        state.isLoggedIn = true,
         state.userData = {
          userName: action.payload.userName,
          userEmail: action.payload.userEmail,
          userID : action.payload.userEmail,
          userAvatar : action.payload.userAvatar
        };

      }
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
   
  },
});

export const { login, setToken, authenticateUser , setIsloading  } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
