import { configureStore } from "@reduxjs/toolkit";
import { deliveryApi } from "./deliveryApi";
import { pizzaApi } from "./pizzaApi";

export const store = configureStore({
  reducer: {
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [deliveryApi.reducerPath]: deliveryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(pizzaApi.middleware)
      .concat(deliveryApi.middleware),
});
