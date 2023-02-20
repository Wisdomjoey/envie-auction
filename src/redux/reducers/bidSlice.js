import { createSlice } from "@reduxjs/toolkit";

const bidSlice = createSlice({
  name: 'bid',
  initialState: {
    userBids: []
  },
  reducers: {
    setuserbids: (state, {payload}) => {
      state.userBids = payload;
    },
  },
  extraReducers: (builder) => {
    
  }
});

export const { setuserbids } = bidSlice.actions;

export default bidSlice.reducer;
