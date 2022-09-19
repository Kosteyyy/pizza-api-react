import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DELIVERY_API_URL } from "../const";
import { TDelivery, TUpdateDeliveryBody } from "../types";

export const deliveryApi = createApi({
  reducerPath: "deliveryApi",
  tagTypes: ["Deliveries"],
  baseQuery: fetchBaseQuery({ baseUrl: DELIVERY_API_URL }),
  endpoints: (builder) => ({
    getDeliveries: builder.query<TDelivery[], void>({
      query: () => "delivery",
      providesTags: ["Deliveries"],
    }),
    updateDeliveryStatus: builder.mutation({
      query: (body: TUpdateDeliveryBody) => ({
        url: `deliveryupdate`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Deliveries"],
    }),
    deleteDelivery: builder.mutation({
      query: (id) => ({
        url: `delivery/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Deliveries"],
    }),
  }),
});

export const {
  useGetDeliveriesQuery,
  useDeleteDeliveryMutation,
  useUpdateDeliveryStatusMutation,
} = deliveryApi;
