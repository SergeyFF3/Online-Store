import {Product} from "entities/ProductCard";

export interface CartSchema {
    cartData?: Product[]
    isLoading?: boolean
    error?: string
}