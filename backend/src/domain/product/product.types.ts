export type Currency = 'GBP'

export interface Product {
    id: string
    name: string
    description: string
    priceInMinorUnits: number
    currency: Currency
    stockQuantity: number
    categoryId: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}
