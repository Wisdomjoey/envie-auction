import { createSlice } from "@reduxjs/toolkit";
// import { register } from "../actions/authActions";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    loading: false,
    signed: false
  },
  reducers: {
    setuser: (state, {payload}) => {
      state.user = payload;
    },
    setsigned: (state, {payload}) => {
      state.signed = payload;
    },
    setloading: (state, {payload}) => {
      state.loading = payload;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(register.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(register.fulfilled, (state, {payload}) => {
    //   state.loading = false;
    //   state.success = true;
    //   state.user += payload;
    // });
    // builder.addCase(register.rejected, (state, {payload}) => {
    //   state.loading = false;
    //   state.error = payload;
    // });
  }
});

export const { setuser, setsigned, setloading } = authSlice.actions;

export default authSlice.reducer;
