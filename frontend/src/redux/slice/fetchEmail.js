import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Email = createAsyncThunk("email", async ({ email }) => {
  const response = await axios.get(`https://home-rental-backend-knmc.onrender.com/findEmail/${email}`);
  return response.data;
});
const fetchEmail = createSlice({
  name: "email",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    emailExist: false,
  },
  extraReducers: (builder) => {
    builder.addCase(Email.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(Email.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      if(state.data !== null){
        state.emailExist = true
      }
    });

    builder.addCase(Email.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default fetchEmail.reducer;
