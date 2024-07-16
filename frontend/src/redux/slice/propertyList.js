import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const propertiesList = createAsyncThunk(
  "propertylist",
  async ({ email }) => {
    const response = await axios.get(
      `https://home-rental-backend-knmc.onrender.com/findEmail/${email}`
    );

    let promise = [];
    response.data.wishlist.map((node) => {
      promise.push(
        axios.get(`http://localhost:8800/properties/${node}`).then((result) => {
          return result.data;
        })
      );
    });

    let res = Promise.all(promise);
   return res.then((value) => {
      return value;
    });
    
  }
);
const propertyList = createSlice({
  name: "propertylist",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(propertiesList.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(propertiesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(propertiesList.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default propertyList.reducer;
