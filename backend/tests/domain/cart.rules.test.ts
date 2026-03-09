import { describe, it, expect } from 'vitest';
import { 
    createCart, 
    addToCart, 
    removeFromCart, 
    calculateCartTotal, 
    InvalidCartError
} from '../../src/domain/cart/cart.rules.js';

describe('cart domain rules', () => {
    const cart = createCart({
        id: 'cart1',
        userId: 'user1'
    })

    it('creates an empty cart', () => {
        expect(cart.items.length).toBe(0)
    })

    it('add an item to the cart', () => {
        const updatedCart = addToCart(cart, {
            productId: 'product1',
            quantity: 1,
            priceInMinorUnits: 1000
        })

        expect(updatedCart.items.length).toBe(1)
    })

    it('removes and item from the cart', () => {
        const updatedCart = removeFromCart(cart, 'product1')

        expect(updatedCart.items.length).toBe(0)
    })

    it('calculates the total price of the card', () => {
        const cart = createCart({id: 'cart2', userId: 'user2'})

        addToCart(cart, {
            productId: 'product1',
            quantity: 6,
            priceInMinorUnits: 1000
        })

        const total = calculateCartTotal(cart)

        expect(total).toBe(6000)
    })

    it('throws if quantity is invalid', () => {
        
        const cart = createCart({id: 'cart3', userId: 'user3'})

        const invalidItem = {
            productId: 'p1',
            quantity: 0,
            priceInMinorUnits: 1000
        }

        expect(() => addToCart(cart, invalidItem)).toThrow(InvalidCartError)
    })
})
