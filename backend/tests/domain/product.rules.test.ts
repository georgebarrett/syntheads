import { describe, it, expect } from 'vitest'
import {
  createProduct,
  InvalidProductError
} from '../../src/domain/product/product.rules.js'


describe('Product domain rules', () => {

  const baseInput = {
    id: 'p100',
    name: '  Roland TR-8S  ',
    description: '  Drum machine  ',
    priceInMinorUnits: 69999,
    currency: 'GBP' as const,
    stockQuantity: 10,
    categoryId: 'c1'
  }


  it('creates a valid product', () => {
    const product = createProduct(baseInput)

    expect(product.name).toBe('Roland TR-8S')
    expect(product.description).toBe('Drum machine')
    expect(product.priceInMinorUnits).toBe(69999)
    expect(product.stockQuantity).toBe(10)
    expect(product.isActive).toBe(true)
  })


  it('throws if name is empty', () => {
    expect(() =>
      createProduct({ ...baseInput, name: '   ' })
    ).toThrow(InvalidProductError)
  })


  it('throws if price is negative', () => {
    expect(() =>
      createProduct({ ...baseInput, priceInMinorUnits: -1 })
    ).toThrow(InvalidProductError)
  })


  it('throws if price is not an number', () => {
    expect(() =>
      createProduct({ ...baseInput, priceInMinorUnits: 12.34 as any })
    ).toThrow(InvalidProductError)
  })


  it('throws if stock quantity is negative', () => {
    expect(() =>
      createProduct({ ...baseInput, stockQuantity: -5 })
    ).toThrow(InvalidProductError)
  })
})
