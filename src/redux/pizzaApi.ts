import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PIZZA_API_URL } from "../const";
import { TOrder, TPizza } from "../types";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({ baseUrl: PIZZA_API_URL }),
  endpoints: (builder) => ({
    getPizzas: builder.query<TPizza[], void>({
      query: () => "pizzas",
    }),
    getOrders: builder.query<TOrder[], void>({
      query: () => `orders`,
      providesTags: ["Orders"],
    }),
    addOrder: builder.mutation({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetPizzasQuery,
  useGetOrdersQuery,
  useAddOrderMutation,
  useDeleteOrderMutation,
} = pizzaApi;
