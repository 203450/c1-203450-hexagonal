import { db } from "../../database/db";
import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

const { v4: uuidv4 } = require('uuid');

export class PgReviewRepository implements ReviewRepository {
    async createReview(uuid: string, text: string, userId: string, bookId: string, status: boolean): Promise<null | Review> {
        try {
            const result = await db.oneOrNone(
                'INSERT INTO review(uuid, text, userid, bookid, status) VALUES($1, $2, $3, $4, $5) RETURNING *',
                [uuid, text, userId, bookId, status]
            );

            if (result) {
                return new Review(result.uuid, result.text, result.userId, result.bookId, result.status);
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error adding review:", error);
            return null;
        }
    }
}