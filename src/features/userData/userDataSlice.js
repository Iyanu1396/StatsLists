import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    topArtists: null,
    isLoading: false,
  },
  reducers: {
    setTopArtists: (state, action) => {
      state.topArtists = action.payload;
    },
    setIsloading: (state, action) => {
        state.isLoading = action.payload;
      },
  },
});

export const {
  setIsloading,
  setTopArtists,
} = userDataSlice.actions;

export default userDataSlice.reducer;
