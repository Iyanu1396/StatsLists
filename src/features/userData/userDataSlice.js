import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: [],
    topTracks: [],
    topAlbums: [],
    playList: {
      playListName: "My Most Streamed Artists Playlist",
      playListDescription: "A playlist of my most streamed artists",
      trackUris: [],
      playListId: "",
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
    setTrackUris: (state, action) => {
      state.playList.trackUris.push(
        ...action.payload.tracks.map((track) => track.uri),
      );
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
  setTrackUris,
} = userDataSlice.actions;

export default userDataSlice.reducer;
