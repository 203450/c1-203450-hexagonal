import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class CreateReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        uuid: string,
        text: string,
        userId: string,
        bookId: string,
        status: boolean
    ): Promise<Review | string | null> {
        try {
        
            if (!text || !userId || !bookId) {
                return null;
            }

            const createReview = await this.ReviewRepository.createReview(uuid, text, userId, bookId, status);

            if (createReview === null) {
                return null;
            }

            return createReview;
        } catch (error) {
            return "Error al crear la reseña";
        }
    }
}