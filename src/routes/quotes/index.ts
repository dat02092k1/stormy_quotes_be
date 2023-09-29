import express from "express";
// import {ValidationData} from "../../middleware/validation";
import {quoteController} from "../../controllers/quote.controller";

export const router = express.Router();

router.post('/quote', quoteController.create);
router.put('/quote/:id', quoteController.edit);
router.delete('/quote/:id', quoteController.delete);