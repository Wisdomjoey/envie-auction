import { createSlice } from "@reduxjs/toolkit";

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

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
