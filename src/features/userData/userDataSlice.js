import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: [],
    topTracks: [],
    topAlbums: [],
    isLoading: false,
  },
  reducers: {
    setTopArtists: (state, action) => {
      state.topArtists = action.payload;
    },
    setTopTracks: (state, action) => {
      state.topTracks = action.payload;
    },
    setTopAlbums: (state, action) => {
      state.topAlbums = action.payload;
    },

    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsloading, setTopArtists, setTopTracks, setTopAlbums } =
  userDataSlice.actions;

export default userDataSlice.reducer;
