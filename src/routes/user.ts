import express from "express";

import controllers from "../controllers";
import validators from "../validators";

const router = express.Router();

router
  .route("/")
  .get(controllers.user.getAccount)
  .post(validators.auth.updateSchema, controllers.user.postAccount);

export default router;
