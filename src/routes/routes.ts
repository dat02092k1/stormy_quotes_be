import express from "express";
import { router as quoteRouter } from './quotes'; // Import the router from post.route.ts

export const router = express.Router();

router.use("/v1/api", quoteRouter);
