import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_ENDPOINT } from "../../utils/constants"

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINT }),
    reducerPath: "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),

    })
})


export const {
    useGetUserQuery
} = api