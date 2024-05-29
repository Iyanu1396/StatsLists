import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: [],
    topTracks: [],
    topAlbums: [],
    playList: {
      trackUris: [],
      ID: "",
    },
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
    setPlayListID: (state, action) => {
      state.playList.ID = action.payload;
    },
    setTrackUris: (state, action) => {
      const uniqueUris = new Set(state.playList.trackUris);
      action.payload.forEach((uri) => uniqueUris.add(uri));
      state.playList.trackUris = Array.from(uniqueUris);
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setIsloading,
  setTopArtists,
  setTopTracks,
  setTopAlbums,
  setPlayListID,
  setTrackUris,
} = userDataSlice.actions;

export default userDataSlice.reducer;
