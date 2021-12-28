import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoDetailsApi } from "../services/cryptoDetailsApi";

export default configureStore({
    reducer: {[cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoDetailsApi.reducerPath]: cryptoDetailsApi.reducer,
    },
})

//