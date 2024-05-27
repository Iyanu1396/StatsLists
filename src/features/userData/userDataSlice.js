import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: null,
    topTracks:null,
    topAlbums:null,
    isLoading: false,
  },
  reducers: {
    setTopArtists: (state, action) => {
      state.topArtists = action.payload;
    },
    setTopTracks: (state, action) => {
      state.topTracks = action.payload;
    },
    setIsloading: (state, action) => {
        state.isLoading = action.payload;
      },
  },
});

export const {
  setIsloading,
  setTopArtists,
  setTopTracks
} = userDataSlice.actions;

export default userDataSlice.reducer;
