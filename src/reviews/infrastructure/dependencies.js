"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewController = void 0;
const pgReviewRepository_1 = require("./pgReviewRepository");
const pgReviewRepository = new pgReviewRepository_1.PgReviewRepository();
const createReviewController_1 = require("./controllers/createReviewController");
const createReviewUseCase_1 = require("../application/createReviewUseCase");
const createReviewUseCase = new createReviewUseCase_1.CreateReviewUseCase(pgReviewRepository);
const CreateReviewController = new createReviewController_1.createReviewController(createReviewUseCase);
exports.CreateReviewController = CreateReviewController;
