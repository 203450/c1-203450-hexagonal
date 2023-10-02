"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewController = void 0;
const uuid_1 = require("uuid");
class createReviewController {
    constructor(createReviewUseCase) {
        this.createReviewUseCase = createReviewUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, bookId, text } = req.body;
                if (!userId || !bookId || !text) {
                    return res.status(400).json({ error: "Los campos userId, bookId y text son obligatorios" });
                }
                const newUuid = (0, uuid_1.v4)();
                const status = true;
                const createdReview = yield this.createReviewUseCase.run(newUuid, text, userId, bookId, status);
                if (createdReview) {
                    return res.status(201).json({
                        status: "éxito",
                        data: {
                            review: createdReview
                        }
                    });
                }
                return res.status(500).json({ error: "Error al crear la reseña" });
            }
            catch (error) {
                console.error("Error al crear reseña:", error);
                return res.status(500).json({ error: "Error interno del servidor" });
            }
        });
    }
}
exports.createReviewController = createReviewController;
