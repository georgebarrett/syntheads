import type { Currency } from "../shared/currency.js"

export interface Product {
    id: string
    name: string
    description: string
    priceInMinorUnits: number
    currency: Currency
    stockQuantity: number
    categoryId: string
    imageUrl: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}
