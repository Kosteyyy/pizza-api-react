import { configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "./pizzaApi";

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaApi.middleware),
});
