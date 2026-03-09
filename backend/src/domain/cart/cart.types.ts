export interface CartItem {
    productId: string
    quantity: number
    priceInMinorUnits: number
}

export interface Cart {
    id: string
    userId: string
    items: CartItem[]
    createdAt: Date
    updatedAt: Date
}
