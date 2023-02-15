import { createAsyncThunk } from "@reduxjs/toolkit";

export const increase = createAsyncThunk(
  'counter/add',
  async ({rejectWithValue}) => {
    console.log('here');
  }
);
