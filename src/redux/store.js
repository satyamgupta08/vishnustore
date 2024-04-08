import {configureStore} from  '@reduxjs/toolkit'
import { createSlice } from './slices/CartSlice'
import {CartSlice} from "./slices/CartSlice"
import CartReducer from "./slices/CartSlice"
export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    },
});