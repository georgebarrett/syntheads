import { describe, it, expect } from 'vitest';
import { normaliseEmail, validatePassword, InvalidPasswordError, InvalidEmailError } from '../../src/domain/user/user.rules.js';

describe('User domain rules', () => {
    describe('normaliseEmail', () => {
        it('throws if email has no @ or .', () => {
            expect(() => normaliseEmail('invalidemail')).toThrow(InvalidEmailError)
        })

        it('throws if email contains spaces', () => { 
            expect(() => normaliseEmail('bad email@test.com')).toThrow(InvalidEmailError)
        })
        
        it('should trim and make email lowercase', () => {
            const result = normaliseEmail('   EMAIL@email.com')
            expect(result).toBe('email@email.com')
        })
    })

    describe('validatePassword', () => {
        it('throws if password is too short', () => {
            expect(() => validatePassword('Short1!')).toThrow(InvalidPasswordError)
        })

        it('throws if no uppercase letter', () => {
            expect(() => validatePassword('password!')).toThrow(InvalidPasswordError)
        })

        it('throws if no special character', () => {
            expect(() => validatePassword('Password1')).toThrow(InvalidPasswordError)
        })

        it('accepts valid password', () => {
            expect(() => validatePassword('Password!')).not.toThrow()
        })
    })
})
