import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProperty = createAsyncThunk("properties", async ({ id }) => {
  const response = await axios.get(`http://localhost:8800/properties/${id}`);
  return response.data;
});
const fetchProperties = createSlice({
  name: "properties",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperty.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProperty.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProperty.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default fetchProperties.reducer;
