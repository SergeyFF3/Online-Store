import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartSchema} from "../types/cartSchema";
import {Product} from "entities/ProductCard";

const initialState: CartSchema = {
    cartData: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductInCart(state, action: PayloadAction<Product>) {
           const findProduct = state.cartData?.find((obj: Product) => obj.id === action.payload.id)

            if (findProduct) findProduct.count++
            else state.cartData.push({...action.payload, count})
        },
        deleteProduct(state, action: PayloadAction<Product>) {
            // state.cartData.filter(value => action.payload !== value)
        }
    }
})

export const {reducer: cartReducer} = cartSlice
export const {actions: cartActions} = cartSlice
