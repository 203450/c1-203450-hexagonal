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
exports.PgReviewRepository = void 0;
const db_1 = require("../../database/db");
const review_1 = require("../domain/review");
const { v4: uuidv4 } = require('uuid');
class PgReviewRepository {
    createReview(uuid, text, userId, bookId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.db.oneOrNone('INSERT INTO review(uuid, text, userid, bookid, status) VALUES($1, $2, $3, $4, $5) RETURNING *', [uuid, text, userId, bookId, status]);
                if (result) {
                    return new review_1.Review(result.uuid, result.text, result.userId, result.bookId, result.status);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error("Error adding review:", error);
                return null;
            }
        });
    }
}
exports.PgReviewRepository = PgReviewRepository;
