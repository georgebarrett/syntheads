import { describe, it, expect } from "vitest";
import { InvalidCategoryError, createCategory } from "../../src/domain/category/category.rules.js";

describe('category domain rules', () => {
    
    const baseInput = {
        id: 'c1',
        name: ' Synthesisers    '
    }

    it('creates a valid category', () => {
        const category = createCategory(baseInput)

        expect(category.name).toBe('Synthesisers')
    })

    it('throws an error if the category name is empty', () => {
        expect(() => 
            createCategory({ ...baseInput, name: '  ' })
        ).toThrow(InvalidCategoryError)
    })
})
