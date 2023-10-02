import { PgReviewRepository } from "./pgReviewRepository";
const pgReviewRepository= new PgReviewRepository();

import { createReviewController } from "./controllers/createReviewController";
import { CreateReviewUseCase } from "../application/createReviewUseCase";

const createReviewUseCase = new CreateReviewUseCase(pgReviewRepository);
const CreateReviewController = new createReviewController(createReviewUseCase);

/*import { deleteReviewController } from "./controllers/deleteReviewController";
import { deleteReviewUseCase } from "../application/deleteReviewUseCase";

const DeleteReviewUseCase = new deleteReviewUseCase(pgReviewRepository);
const DeleteReviewController = new deleteReviewController(DeleteReviewUseCase);

import { filterUserController } from "./controllers/filterUserReviewController";
import { filterUserReviewUseCase } from "../application/filterUserReviewUseCase";

const FilterUserReviewUseCase = new filterUserReviewUseCase(pgReviewRepository);
const FilterUserController = new filterUserController(FilterUserReviewUseCase);

import { getInactiveReviewController } from "./controllers/getInactiveReviews";
import { getInactiveReviewUseCase } from "../application/getInactiveReviewUsecase";

const GetInactiveReviewUseCase = new getInactiveReviewUseCase(pgReviewRepository);
const GetInactiveReviewController = new getInactiveReviewController(GetInactiveReviewUseCase);

import { getReviewsController } from "./controllers/getReviewsController";
import { getReviewsUseCase } from "../application/getReviewsUseCase";

const GetReviewsUseCase = new getReviewsUseCase(pgReviewRepository);
const GetReviewsController = new getReviewsController(GetReviewsUseCase);

import { inactivateReviewController } from "./controllers/inactiveReviewController";
import { inactivedReviewUseCase } from "../application/inactivedReviewUseCase";

const InactivedReviewUseCase = new inactivedReviewUseCase(pgReviewRepository);
const InactivedReviewController = new inactivateReviewController(InactivedReviewUseCase);

import { getReviewController } from "./controllers/getReviewController";
import { getReviewUseCase } from "../application/getReviewUseCase";

const GetReviewUseCase = new getReviewUseCase(pgReviewRepository);
const GetReviewController = new getReviewController(GetReviewUseCase);

import { updateReviewController } from "./controllers/updateReviewController";
import { updateReviewUseCase } from "../application/updateReviewUseCase";

const UpdateReviewUseCase = new updateReviewUseCase(pgReviewRepository);
const UpdateReviewsController = new updateReviewController(UpdateReviewUseCase);*/

export {
    CreateReviewController,
    /*DeleteReviewController,
    FilterUserController,
    GetInactiveReviewController,
    GetReviewController,
    GetReviewsController,
    InactivedReviewController,
    UpdateReviewsController*/
};