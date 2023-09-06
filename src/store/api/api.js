import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../../utils/constants";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery } = api;