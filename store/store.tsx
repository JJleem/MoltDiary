import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";

export const store = configureStore({
  reducer: {
    asideToggle: toggleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
