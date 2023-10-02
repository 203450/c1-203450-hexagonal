import express from "express";
import {
    CreateReviewController,
    /*DeleteReviewController,
    FilterUserController,
    GetInactiveReviewController,
    GetReviewController,
    GetReviewsController,
    InactivedReviewController,
    UpdateReviewsController*/
} from "./dependencies";

export const reviewRoutes = express.Router();

reviewRoutes.post('/create-review', CreateReviewController.run.bind(CreateReviewController));
/*reviewRoutes.delete('/delete-review', DeleteReviewController.run.bind(DeleteReviewController));
reviewRoutes.get('/filtro/:userId', FilterUserController.run.bind(FilterUserController));
reviewRoutes.get('/inactive', GetInactiveReviewController.run.bind(GetInactiveReviewController));
reviewRoutes.get('/review/:uuid', GetReviewController.run.bind(GetReviewController));
reviewRoutes.get('/reviews', GetReviewsController.run.bind(GetReviewsController));
reviewRoutes.get('/reviews/inactived/:uuid', InactivedReviewController.run.bind(InactivedReviewController));
reviewRoutes.put('/update/:uuid', UpdateReviewsController.run.bind(UpdateReviewsController));*/