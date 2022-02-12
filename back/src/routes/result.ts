import express from "express";
const router = express.Router();

import { resultController } from "../controllers/result";

router.get("/result", resultController);

export default router;
