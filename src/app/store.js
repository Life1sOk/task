import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/current-product.slice';

const store = configureStore({
    reducer: {
        product: productReducer,
    }
})

export default store;