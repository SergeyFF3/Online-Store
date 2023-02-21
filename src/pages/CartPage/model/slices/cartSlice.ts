import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartSchema} from "../types/cartSchema";
import {Product} from "entities/ProductCard";

const initialState: CartSchema = {
    cartData: [],
    totalPrice: 0,
    disabled: false
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

            state.totalPrice = state.cartData?.reduce((sum?: number, obj?: Product) => {
                return obj.regular_price.value * obj.count + sum
            }, 0)
        },
        minusProduct(state, action) {
            const findProduct = state.cartData?.find((obj) => obj.id === action.payload.id)

            if (findProduct?.count > 0) {
                findProduct.count--
            }
            if (findProduct?.count < 1) {
               findProduct.disabled = true
            }

            state.totalPrice = state.cartData?.reduce((sum?: number, obj?: Product) => {
                return sum - obj.regular_price.value
            }, state.totalPrice)
        },
        deleteProduct(state, action: PayloadAction<Product>) {
            state.cartData = state.cartData?.filter(obj => obj.id !== action.payload.id)
        },
        clearCart(state) {
            state.cartData = []
            state.totalPrice = 0
        }
    }
})

export const {reducer: cartReducer} = cartSlice
export const {actions: cartActions} = cartSlice
