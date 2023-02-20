import { createSlice } from "@reduxjs/toolkit";
import { addUser, deleteUser, editUser, getUser } from "../actions/userActions";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: []
  },
  reducers: {
    setuserdata: (state, {payload}) => {
      state.user = {
        ...state.user,
        ...payload
      }
    },
    setusers: (state, {payload}) => {
      state.users = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(addUser.pending, (state) => {
      
    // });
    // builder.addCase(addUser.fulfilled, (state, {payload}) => {
      
    // });
    // builder.addCase(addUser.rejected, (state, {payload}) => {
      
    // });
    // builder.addCase(editUser.pending, (state) => {
      
    // });
    // builder.addCase(editUser.fulfilled, (state, {payload}) => {
      
    // });
    // builder.addCase(editUser.rejected, (state, {payload}) => {
      
    // });
    // builder.addCase(getUser.pending, (state) => {
      
    // });
    // builder.addCase(getUser.fulfilled, (state, {payload}) => {
      
    // });
    // builder.addCase(getUser.rejected, (state, {payload}) => {
      
    // });
    // builder.addCase(deleteUser.pending, (state) => {
      
    // });
    // builder.addCase(deleteUser.fulfilled, (state, {payload}) => {
      
    // });
    // builder.addCase(deleteUser.rejected, (state, {payload}) => {
      
    // });
  }
});

export const { setuserdata, setusers } = userSlice.actions;

export default userSlice.reducer;
