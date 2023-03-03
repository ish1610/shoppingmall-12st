"use client";
import { configureStore } from "@reduxjs/toolkit";
import promotionSlice from "./features/promotionSlice";


const store = configureStore({
  reducer: {
    promotion: promotionSlice,
  },
});

export default store;
