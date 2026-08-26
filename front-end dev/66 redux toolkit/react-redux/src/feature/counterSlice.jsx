import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increamet: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increametbyvalue:(state, actions) => {
        state.count += Number(actions.payload);
    }
  },
});

export let { increamet, decrement, increametbyvalue } = counterSlice.actions;

export default counterSlice.reducer;
