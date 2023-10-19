"use client";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
