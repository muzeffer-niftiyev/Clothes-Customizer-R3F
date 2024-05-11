import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    isIntro: true,
  },
  reducers: {
    toggleIsIntro: (state) => {
      state.isIntro = !state.isIntro;
    },
  },
});

export const { toggleIsIntro } = pageSlice.actions;
export default pageSlice.reducer;
