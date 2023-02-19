import {Product} from "entities/ProductCard";

export interface ContentSchema {
    contentData?: Product[]
    isLoading?: boolean
}