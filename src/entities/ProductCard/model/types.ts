export interface RegularPrice {
    currency: string
    value: number
}

export interface Product {
    type?: string
    id?: number
    sku?: string
    title?: string
    regular_price?: RegularPrice
    image?: string
    brand?: number
    count?: number | null
    disabled
}