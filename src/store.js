import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./features/colorSlice";
import pageSlice from "./features/pageSlice";

export default configureStore({
  reducer: {
    color: colorSlice,
    isIntro: pageSlice,
  },
});
