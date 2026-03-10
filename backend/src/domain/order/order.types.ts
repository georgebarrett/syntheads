export type Currency = 'GBP'

export type OrderStatus = 
    |   'pending'
    |   'paid'
    |   'shipped'
    |   'completed'
    |   'cancelled'

export interface OrderItem {
    productId: string
    quantity: number
    priceInMinorUnits: number
}

export interface Order {
    id: string
    userId: string
    items: OrderItem[]
    totalInMinorUnits: number
    currency: Currency
    status: OrderStatus
    createdAt: Date
    updatedAt: Date
}
