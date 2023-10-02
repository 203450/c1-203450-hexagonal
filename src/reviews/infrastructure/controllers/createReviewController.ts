import { Request, Response } from "express";
import { CreateReviewUseCase } from "../../application/createReviewUseCase";
import { v4 as uuid } from "uuid";

export class createReviewController {

    constructor(readonly createReviewUseCase: CreateReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const { userId, bookId, text } = req.body;

            if (!userId || !bookId || !text) {
                return res.status(400).json({ error: "Los campos userId, bookId y text son obligatorios" });
            }

            const newUuid: string = uuid();
            const status = true;

            const createdReview = await this.createReviewUseCase.run(
                newUuid, text, userId, bookId, status
            );

            if (createdReview) {
                return res.status(201).json({
                    status: "éxito",
                    data: {
                        review: createdReview
                    }
                });
            }

            return res.status(500).json({ error: "Error al crear la reseña" });
        } catch (error) {
            console.error("Error al crear reseña:", error);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}