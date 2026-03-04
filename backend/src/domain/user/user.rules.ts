import { Role } from "./user.types.js"
import type { User } from "./user.types.js"

export class InvalidEmailError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidEmailError'
    }
}

export class InvalidPasswordError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidPasswordError'
    }
}

export const normaliseEmail = (email: string): string => {
    const normalised = email.trim().toLowerCase()

    if (!normalised.includes('@') || !normalised.includes('.')) {
        throw new InvalidEmailError('Please enter a valid email format.')
    }

    if (normalised.includes(' ')) {
        throw new InvalidEmailError('Please enter a valid email format.')
    }

    return normalised
}

export const validatePassword = (password: string): void => {
    if (password.length < 8) {
        throw new InvalidPasswordError('Password must be at least 8 characters long.')
    }

    const hasUppercase = /[A-Z]/.test(password)
        if (!hasUppercase) {
            throw new InvalidPasswordError('Password must contain at least one uppercase letter.')
        }

    const hasSpecialChar = /[^A-Za-z0-9]/.test(password)
        if (!hasSpecialChar) {
            throw new InvalidPasswordError('Password must contain at least one special character.')
        }
    }

export const createUser = ({
    id,
    email,
    passwordHash,
    role = Role.CUSTOMER
}: {
    id: string
    email: string
    passwordHash: string
    role?: Role
}): User => {
    const normalisedEmail = normaliseEmail(email)

    const now = new Date()

    return {
        id,
        email: normalisedEmail,
        passwordHash,
        role,
        createdAt: now,
        updatedAt: now
    }
}
