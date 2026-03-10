import { describe, it, expect } from "vitest";
import { 
    createOrder,
    calculateOrderTotal,
    InvalidOrderError 
} from "../../src/domain/order/order.rules.js";

describe('order domain rules', () => {

    const baseItems = [
        {
            productId: '001',
            quantity: 6,
            priceInMinorUnits: 1000
        }
    ]

    it('creates a valid order', () => {

        const order = createOrder({
            id: 'order1',
            userId: 'user9',
            items: baseItems,
            currency: 'GBP'
        })
    })

    it('calculates orders correctly', () => {
        const total = calculateOrderTotal(baseItems)
        expect(total).toBe(6000)
    })

    it('throws an error if an order has no items', () => {

        const emptyOrder = {
            id: '002',
            userId: '101',
            items: [],
            currency: 'GBP' as const
        }

        expect(() => createOrder(emptyOrder)).toThrow(InvalidOrderError)
    })
})
