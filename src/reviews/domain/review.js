"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
class Review {
    constructor(uuid, text, userId, bookId, status) {
        this.uuid = uuid;
        this.text = text;
        this.userId = userId;
        this.bookId = bookId;
        this.status = status;
    }
}
exports.Review = Review;
