import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ContentSchema} from "../types/contentSchema";
import {Product} from "entities/ProductCard";
import {Brand} from "widgets/Sidebar/model/types";

const products = require('shared/json/products.json') as Product[]

const initialState: ContentSchema = {
    contentData: products
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        sortProducts(state, action: PayloadAction<Brand>){
          state.contentData =  state.contentData?.filter((obj) => obj.brand === action.payload.id)
        }
    }
})

export const { reducer: contentReducer } = contentSlice
export const { actions: contentActions} = contentSlice
