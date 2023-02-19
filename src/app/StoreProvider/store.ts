import {configureStore} from "@reduxjs/toolkit";
import {CartSchema} from "pages/CartPage";
import {cartReducer} from "pages/CartPage/model/slices/cartSlice";
import {contentReducer} from "pages/ContentPage/model/slices/contentSlice";
import {useDispatch} from "react-redux";
import {ContentSchema} from "pages/ContentPage";

export interface StateSchema {
    cart: CartSchema
    content: ContentSchema
}

export const store = configureStore<StateSchema>({
    reducer: {
        cart: cartReducer,
        content: contentReducer
    }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch