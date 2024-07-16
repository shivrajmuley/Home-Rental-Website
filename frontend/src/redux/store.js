import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slice/bookingSlice";
import emailReducer from "./slice/fetchEmail";
import propertyReducer from "./slice/fetchProperties";
import propertylistReducer from "./slice/propertyList";
import modeReducer from "./slice/mode";
export const store = configureStore({
  reducer: {
    email: emailReducer,
    property: propertyReducer,
    propertylist: propertylistReducer,
    booking: bookingReducer,
    mode: modeReducer,
  },
});
