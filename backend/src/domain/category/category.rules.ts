import type { Category } from "./category.types.js";

export class InvalidCategoryError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidCategoryError'
    }
}

export const validateCategoryName = (name: string): void => {
    if (!name.trim()) {
        throw new InvalidCategoryError('A catgegory must have a name.')
    }
}

export const createCategory = ({
    id,
    name
}: {
    id: string
    name: string
}): Category => {

    validateCategoryName(name)

    const now = new Date

    return {
        id,
        name: name.trim(),
        createdAt: now,
        updatedAt: now
    }
}
