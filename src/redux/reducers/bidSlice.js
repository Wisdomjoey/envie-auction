import { createSlice } from "@reduxjs/toolkit";

const bidSlice = createSlice({
  name: 'bids',
  initialState: {
    bids: [],
    userBids: []
  },
  reducers: {
    setbids: (state, {payload}) => {
      state.bids = payload;
    },
    setuserbids: (state, {payload}) => {
      state.userBids = payload;
    },
  },
  extraReducers: (builder) => {
    
  }
});

export const { setbids, setuserbids } = bidSlice.actions;

export default bidSlice.reducer;
