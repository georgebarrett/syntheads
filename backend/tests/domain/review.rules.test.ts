import { describe, it, expect } from 'vitest';
import {
    InvalidReviewError,
    validateProductId,
    validateUserId,
    validateRating,
    validateComment,
    createReview
} from '../../src/domain/review/review.rules.js';

describe('review domain rules', () => {

    describe('validateProductId', () => {
        
        it('throws an error if product id is empty', () => {
            expect(() => validateProductId('')).toThrow(InvalidReviewError)
        })

        it('throws an error if product has white space', () => {
            expect(() => validateProductId('    ')).toThrow(InvalidReviewError)
        })

        it('does not throw for the happy path', () => {
            expect(() => validateProductId('product1')).not.toThrow(InvalidReviewError)
        })
    })

    describe('validateUserId', () => {

        it('throws an error if userId is empty', () => {
            expect(() => validateUserId('')).toThrow(InvalidReviewError)
        })

        it('throws an error if the userID is whitespace', () => {
            expect(() => validateUserId('   ')).toThrow(InvalidReviewError)
        })

        it('does not throw an error for the happy path', () => {
            expect(() => validateUserId('aphex2')).not.toThrow(InvalidReviewError)
        })
    })

    describe('validateRating', () => {

        it('throws an error if rating is less than 1', () => {
            expect(() => validateRating(0)).toThrow(InvalidReviewError)
        })

        it('throws an erro if rating is greater than 5', () => {
            expect(() => validateRating(6)).toThrow(InvalidReviewError)
        })

        it('throws if rating is a floating point', () => {
            expect(() => validateRating(3.5)).toThrow(InvalidReviewError)
        })

        it('does not throw for valid ratings', () => {
            expect(() => validateRating(1)).not.toThrow()
            expect(() => validateRating(3)).not.toThrow()
            expect(() => validateRating(5)).not.toThrow()
        })
    })

    describe('validateComment', () => {

        it('does not throw if comment is undefined', () => {
            expect(() => validateComment(undefined)).not.toThrow(InvalidReviewError)
        })

        it('throws an error if comment is empty', () => {
            expect(() => validateComment('')).toThrow(InvalidReviewError)
        })

        it('throws an error if comment is whitespace', () => {
            expect(() => validateComment('   ')).toThrow(InvalidReviewError)
        })

        it('does not throw for a valid comment', () => {
            expect(() => validateComment('lush synth')).not.toThrow(InvalidReviewError)
        })
    })

    describe('createReview', () => {

        const baseInput = {
            id: 'review1',
            productId: 'product66',
            userId: 'user101',
            rating: 5
        }

        it('creates a valid review', () => {

            const review = createReview(baseInput, [])

            expect(review.id).toBe('review1')
            expect(review.productId).toBe('product66')
            expect(review.userId).toBe('user101')
            expect(review.rating).toBe(5)
        })

        it('adds a trimmed comment if one is posted', () => {

            const review = createReview({
                ...baseInput,
                comment: '  lush synth  '
            }, [])

            expect(review.comment).toBe('lush synth')
        })

        it('throws an error if the user already left a review', () => {

            const existingReview = [
                {
                    id: 'no-more-reviews',
                    productId: 'product66',
                    userId: 'user101',
                    rating: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]

            expect(() => 
                createReview(baseInput, existingReview)
            ).toThrow(InvalidReviewError)
        })
    })
})