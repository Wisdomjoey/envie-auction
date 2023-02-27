import { createSlice } from "@reduxjs/toolkit";

const bidSlice = createSlice({
  name: 'bid',
  initialState: {
    userBids: [],
    bidWon: 0
  },
  reducers: {
    setuserbids: (state, {payload}) => {
      state.userBids = payload;
    },
    setbidwon: (state) => {
      state.bidWon += 1;
    }
  },
  extraReducers: (builder) => {
    
  }
});

export const { setuserbids, setbidwon } = bidSlice.actions;

export default bidSlice.reducer;
