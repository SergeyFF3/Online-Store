import {createSlice} from "@reduxjs/toolkit";
import {CartSchema} from "../types/cartSchema";

const initialState: CartSchema = {

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
})

export const { reducer: cartReducer } = cartSlice
export const { actions: cartActions} = cartSlice
