import type { Product } from "../product/product.types.js";

export class InvalidProductError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidProductError'
    }
}

export const validateProductName = (name: string): void => {
    if (!name.trim()) {
        throw new InvalidProductError('Product name is required.')
    }
}

export const validateProductDescription = (description: string): void => {
  if (!description.trim()) {
    throw new InvalidProductError('Product description is required.')
  }
}

export const validatePriceInMinorUnits = (priceInMinorUnits: number): void => {
    if (!Number.isInteger(priceInMinorUnits) || priceInMinorUnits < 0 ) {
        throw new InvalidProductError('Product Price must not be a negative number.')
    }
}

export const validateStockQuantity = (stockQuantity: number): void => {
    if (!Number.isInteger(stockQuantity) || stockQuantity < 0) {
        throw new InvalidProductError('Stock quantity must not be a negative number.')
    }
}

export const createProduct = ({
    id,
    name,
    description,
    priceInMinorUnits,
    currency,
    stockQuantity,
    categoryId,
    isActive = true
} : {
    id: string
    name: string
    description: string
    priceInMinorUnits: number
    currency: 'GBP'
    stockQuantity: number
    categoryId: string
    isActive?: boolean
}): Product => {

    validateProductName(name)
    validateProductDescription(description)
    validatePriceInMinorUnits(priceInMinorUnits)
    validateStockQuantity(stockQuantity)

    const now = new Date()

    return {
    id,
    name: name.trim(),
    description: description.trim(),
    priceInMinorUnits,
    currency,
    stockQuantity,
    categoryId,
    isActive,
    createdAt: now,
    updatedAt: now
  }
}
