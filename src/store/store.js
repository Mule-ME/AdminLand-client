import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { api } from "./api/api"


export const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)

