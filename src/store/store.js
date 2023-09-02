import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducer"


export const store = configureStore({
    reducer: {
        global: globalReducer,
    }
})


