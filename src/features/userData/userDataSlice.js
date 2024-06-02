import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: [],
    topTracks: [],
    topAlbums: [],
    isLoading: false,
    playlist: {
      isCreated: false,
      name: "",
      id: "",
      uri: "",
    },
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
    setPlaylist: (state, action) => {
      state.playlist.id = action.payload.id;
      state.playlist.uri = action.payload.uri;
      state.playlist.name = action.payload.name;
    },
    setIsCreated: (state, action) => {
      state.playlist.isCreated = action.payload;
    },
    resetPlayList: (state) => {
      state.playlist.isCreated = false;
      state.playlist.id = "";
      state.playlist.uri = "";
    },
  },
});

export const {
  setIsloading,
  setTopArtists,
  setTopTracks,
  setTopAlbums,
  setPlaylist,
  setIsCreated,
  resetPlayList
} = userDataSlice.actions;

export default userDataSlice.reducer;
