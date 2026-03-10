import type { OrderItem, OrderStatus, Order } from "./order.types.js";

export class InvalidOrderError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidOrderError'
    }
}

export const calculateOrderTotal = (items: OrderItem[]): number => {
    return items.reduce((total, item) => {
        return total + (item.priceInMinorUnits * item.quantity)
    }, 0)
}

export const createOrder = ({
    id,
    userId,
    items,
    currency
}: {
    id: string
    userId: string
    items: OrderItem[]
    currency: 'GBP'
}): Order => {
    
    if (items.length === 0) {
        throw new InvalidOrderError('An order must contain at least one item.')
    }

    const totalInMinorUnits = calculateOrderTotal(items)

    const now = new Date()

    return {
        id,
        userId,
        items,
        totalInMinorUnits,
        currency,
        status: 'pending',
        createdAt: now,
        updatedAt: now
    }
}