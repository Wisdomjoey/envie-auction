import { createSlice } from "@reduxjs/toolkit";

const auctionSlice = createSlice({
  name: 'auction',
  initialState: {
    auctions: [],
    userAuctions: []
  },
  reducers: {
    setauctions: (state, {payload}) => {
      state.auctions = payload;
    },
    setuserauctions: (state, {payload}) => {
      state.userAuctions = payload;
    },
  },
  extraReducers: (builder) => {
    
  }
});

export const { setauctions, setuserauctions } = auctionSlice.actions;

export default auctionSlice.reducer;
