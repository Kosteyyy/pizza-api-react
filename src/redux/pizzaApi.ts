import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PIZZA_API_URL } from "../const";
import { TPizza } from "../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: PIZZA_API_URL }),
  endpoints: (builder) => ({
    getPizzas: builder.query<TPizza[], void>({
      query: (arg = undefined) => "pizzas",
    }),
  }),
});

export const { useGetPizzasQuery } = pizzaApi;
