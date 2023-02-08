import {configureStore} from "@reduxjs/toolkit";
import { CartSchema } from "pages/CartPage";
import { cartReducer } from "pages/CartPage/model/slices/cartSlice";
import { useDispatch } from "react-redux";

export interface StateSchema {
cart: CartSchema
}

export const store = configureStore<StateSchema>({
    reducer: {
        cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch