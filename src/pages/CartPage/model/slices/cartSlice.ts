import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartSchema} from "../types/cartSchema";
import {Product} from "entities/ProductCard";

const initialState: CartSchema = {
    cartData: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductInCart(state, action: PayloadAction<Product>) {
           const findProduct = state.cartData?.find((obj) => obj.id === action.payload.id)

            if (findProduct?.count) {
                findProduct.count++
            } else {
                state.cartData?.push({...action.payload, count: 1})
            }

            // state.totalPrice = state.cartData?.reduce((sum?: number, obj?: Product) => {
            //     if (obj?.regular_price?.value && obj.count && sum) {
            //         return obj?.regular_price?.value * obj?.count + sum
            //     }
            // }, 0)
        },
        deleteProduct(state, action: PayloadAction<Product>) {
           state.cartData = state.cartData?.filter(obj => obj.id !== action.payload)
        }
    }
})

export const {reducer: cartReducer} = cartSlice
export const {actions: cartActions} = cartSlice
