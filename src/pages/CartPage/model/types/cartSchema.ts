import {Product} from "entities/ProductCard";

export interface CartSchema {
    cartData?: Product[]
    totalPrice?: number
    isLoading?: boolean
}