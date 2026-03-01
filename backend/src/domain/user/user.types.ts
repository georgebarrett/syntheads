export enum Role {
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER'
}

export interface User {
    id: string
    email: string
    passwordHash: string
    role: Role
    createdAt: Date
    updatedAt: Date
}
