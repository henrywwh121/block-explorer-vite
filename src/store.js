import { configureStore } from "@reduxjs/toolkit";
import blockSlice from "./features/block/blockSlice";

const store = configureStore({
  reducer: {
    block: blockSlice,
  },
});

export { store };
