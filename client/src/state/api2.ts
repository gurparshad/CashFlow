import {createApi} from "@reduxjs/toolkit/query/react";
import {GetKpisResponse, GetProductsResponse, GetTransactionsResponse} from "./types";
import {getKPIs, getProducts, getTransactions} from "@/state/localApi";

export const api = createApi({
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  baseQuery: async () => ({data: null}), // We don't need baseQuery for static data
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      async queryFn() {
        try {
          const data = await getKPIs();
          return {data}; // Return the static KPIs data
        } catch (error) {
          return {error: {status: "FETCH_ERROR", error: String(error)}};
        }
      },
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      async queryFn() {
        try {
          const data = await getProducts();
          return {data}; // Return the static Products data
        } catch (error) {
          return {error: {status: "FETCH_ERROR", error: String(error)}};
        }
      },
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      async queryFn() {
        try {
          const data = await getTransactions();
          return {data}; // Return the static Transactions data
        } catch (error) {
          return {error: {status: "FETCH_ERROR", error: String(error)}};
        }
      },
      providesTags: ["Transactions"],
    }),
  }),
});

export const {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;
