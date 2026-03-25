import type { Cart, CartItem } from "./cart.types.js";

export class InvalidCartError extends Error {
    constructor(message: string)  {
        super(message)
        this.name = 'InvalidCartError'
    }
}

export const validateQuantity = (quantity: number): void => {
    if (!Number.isInteger(quantity) || quantity < 1) {
        throw new InvalidCartError('The item quantity must be at least 1.')
    }
}

export const createCart = ({
    id,
    userId
}: {
    id: string
    userId: string
}): Cart => {

    const now = new Date()
    
    return {
        id,
        userId,
        items: [],
        createdAt: now,
        updatedAt: now
    }
}

export const addToCart = (
    cart: Cart,
    item: CartItem
): Cart => {

    validateQuantity(item.quantity)

    const existingItem = cart.items.find(
        item => item.productId === item.productId
    )

    let items = [...cart.items]

    if (existingItem) {
        items = items.map(i => i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
    } else {
        items.push(item)
    }

    return {
        ...cart,
        items,
        updatedAt: new Date()
    }
}

export const removeFromCart = (
    cart: Cart,
    productId: string
): Cart => {

    const items = cart.items.filter(
        item => item.productId !== productId
    )

    return {
        ...cart,
        items,
        updatedAt: new Date()
    }
}

export const calculateCartTotal = (cart: Cart): number => {
    return cart.items.reduce((total, item) => {
        return total + (item.priceInMinorUnits * item.quantity)
    }, 0)
}
