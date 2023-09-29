import express from "express";
import { router as quoteRouter } from './quotes';
import { router as categoryRouter } from './category/index';

export const router = express.Router();

router.use("/v1/api", quoteRouter);
router.use("/v1/api", categoryRouter);
