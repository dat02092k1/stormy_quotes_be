import express from "express";
// import {ValidationData} from "../../middleware/validation";
import {categoryController} from "../../controllers/category.controller";

export const router = express.Router();

router.post('/category', categoryController.create);
router.delete('/category/:id', categoryController.delete);
router.get('/category', categoryController.getAll);

