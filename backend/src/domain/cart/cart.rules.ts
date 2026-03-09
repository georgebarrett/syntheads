import type { Cart, CartItem } from "./cart.types.js";

export class InvalidCartError extends Error {
    constructor(message: string)  {
        super(message)
        this.name = 'InvalidCartError'
    }
}

export const validateQuantity = (quantity: number): void => {
    if (!Number.isInteger(quantity) || quantity < 1) {
        throw new InvalidCartError('The cart must have at least one product inside.')
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

    const itemAlreadyInCart = cart.items.find(
        i => i.productId === item.productId
    )

    if (itemAlreadyInCart) {
        itemAlreadyInCart.quantity += item.quantity
    } else {
        cart.items.push(item)
    }

    cart.updatedAt = new Date()

    return cart
}

export const removeFromCart = (
    cart: Cart,
    productId: string
): Cart => {
    cart.items = cart.items.filter(
        item => item.productId !== productId
    )

    cart.updatedAt = new Date()

    return cart
}

export const calculateCartTotal = (cart: Cart): number => {
    return cart.items.reduce((total, item) => {
        return total + (item.priceInMinorUnits * item.quantity)
    }, 0)
}
