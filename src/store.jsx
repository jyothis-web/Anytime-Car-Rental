import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./Redux/car/CarSlice"; 

const store = configureStore({
  reducer: {
    car: carReducer,// Ensure 'brand' is correctly set here
  },
});

export default store;
