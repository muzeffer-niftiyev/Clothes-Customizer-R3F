import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    color: "#EFBD4E",
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {changeColor} = colorSlice.actions;
export default colorSlice.reducer;
