import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import daySliceReducer from "./daySlice";
export const store = configureStore({
  reducer: {
    asideToggle: toggleReducer,
    setDate: daySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
