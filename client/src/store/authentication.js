import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setIsLoading, signOut } = authenticationSlice.actions;
export default authenticationSlice.reducer;