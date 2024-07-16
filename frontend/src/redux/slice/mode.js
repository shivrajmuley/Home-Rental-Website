import { createSlice } from "@reduxjs/toolkit";

const mode = createSlice({
  name: "mode",
  initialState: {
    active: true,
  },
  reducers: {
    toggleSwitch: (state) => {
      state.active = !state.active;
    },
  },
});
export const toggleSwitch = mode.actions.toggleSwitch;
export default mode.reducer;
