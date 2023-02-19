import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ContentSchema} from "../types/contentSchema";
import {Product} from "entities/ProductCard";

const products = require('shared/json/products.json') as Product[]

const initialState: ContentSchema = {
    contentData: products,
    isLoading: false
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        sortProducts(state, action: PayloadAction<number>){
            state.contentData?.filter((value) => action.payload !== value)
        }
    }
})

export const { reducer: contentReducer } = contentSlice
export const { actions: contentActions} = contentSlice
