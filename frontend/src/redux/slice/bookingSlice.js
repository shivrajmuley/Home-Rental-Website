import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBook = createAsyncThunk(
  "fetchBook",
  async ({ startDate, endDate, totalPrice, customerId, listingId }) => {
    const response = await axios.post("http://localhost:8800/booking", {
      startDate,
      endDate,
      totalPrice,
      customerId,
      listingId,
    });
    return response.data;
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchBook.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });


  },


});


export default bookingSlice.reducer;
