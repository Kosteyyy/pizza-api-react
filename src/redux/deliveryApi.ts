import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DELIVERY_API_URL } from "../const";
import { TDelivery } from "../types";

export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  baseQuery: fetchBaseQuery({ baseUrl: DELIVERY_API_URL }),
  endpoints: (builder) => ({
    getDeliveries: builder.query<TDelivery[], void>({
      query: (arg = undefined) => "delivery",
    }),
  }),
});

export const { useGetDeliveriesQuery } = deliveryApi;
