import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
  isToggled: boolean;
}

const initialState: ToggleState = {
  isToggled: false,
};

const toggleSlice = createSlice({
  name: "asideToggle",
  initialState,
  reducers: {
    asideToggle: (state) => {
      state.isToggled = !state.isToggled;
    },
  },
});

export const { asideToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
