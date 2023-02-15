import { createSlice } from "@reduxjs/toolkit";
import { increase } from "../actions/counter";

// const initialState = {
//   value: 0
// }

// function counterReducer(state = initialState, action) {
//   if (action.type === 'counter/increment') {
//     return {
//       ...state,
//       value: state.value + 1
//     }
//   }

//   return state;
// }

const init = () => {
  setTimeout(() => {
    return 5;
  }, 500);
}

var num = init();

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: num
  },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(increase.fulfilled, (state) => {
      console.log('here1');
      state.value += 1;
    })
  }
})

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
