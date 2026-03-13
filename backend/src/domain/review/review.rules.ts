import type { Review } from './review.types.js'

export class InvalidReviewError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'InvalidReviewError'
    }
}

export const validateProductId = (productId: string): void => {
    if (!productId.trim()) {
        throw new InvalidReviewError('Product id is required.')
    }
}

export const validateUserId = (userId: string): void => {
    if (!userId.trim()) {
        throw new InvalidReviewError('User id is required.')
    }
}

export const validateRating = (rating: number): void => {
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new InvalidReviewError('Rating must be between 1 and 5.')
    }
}

export const validateComment = (comment?: string): void => {
    if (comment !== undefined && !comment.trim()) {
        throw new InvalidReviewError('Comment must not be empty.')
    }
}

export const createReview = ({
    id,
    productId,
    userId,
    rating,
    comment
}: {
    id: string
    productId: string
    userId: string
    rating: number
    comment?: string
}, existingReviews: Review[]): Review => {

    validateProductId(productId)
    validateUserId(userId)
    validateRating(rating)
    validateComment(comment)

    const duplicateReview = existingReviews.find((review) => {
        return review.productId === productId && review.userId === userId
    })

    if (duplicateReview) {
        throw new InvalidReviewError('User has already reviewed this product.')
    }

    const now = new Date()

    const review: Review = {
        id,
        productId,
        userId,
        rating,
        createdAt: now,
        updatedAt: now
    }

    if (comment) {
        review.comment = comment.trim()
    }

    return review
}
