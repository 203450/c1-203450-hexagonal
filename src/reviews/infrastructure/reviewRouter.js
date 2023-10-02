"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.reviewRoutes = express_1.default.Router();
exports.reviewRoutes.post('/create-review', dependencies_1.CreateReviewController.run.bind(dependencies_1.CreateReviewController));
/*reviewRoutes.delete('/delete-review', DeleteReviewController.run.bind(DeleteReviewController));
reviewRoutes.get('/filtro/:userId', FilterUserController.run.bind(FilterUserController));
reviewRoutes.get('/inactive', GetInactiveReviewController.run.bind(GetInactiveReviewController));
reviewRoutes.get('/review/:uuid', GetReviewController.run.bind(GetReviewController));
reviewRoutes.get('/reviews', GetReviewsController.run.bind(GetReviewsController));
reviewRoutes.get('/reviews/inactived/:uuid', InactivedReviewController.run.bind(InactivedReviewController));
reviewRoutes.put('/update/:uuid', UpdateReviewsController.run.bind(UpdateReviewsController));*/ 
