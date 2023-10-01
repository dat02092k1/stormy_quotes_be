import {Request, Response} from "express";
import {CategoryService} from "../services/category.service";
import {UtilsFunc} from "../utils/utils";
import { asyncHandler } from "../middlewares/asyncHandler";
import { OK } from "../response/success.response";

class CategoryController {
    create = asyncHandler(async (req: Request, res: Response) => {
        const category =  req.body.category;

        OK(res, 'create success', await CategoryService.addCategory(category));
    })

    delete = async (req: Request, res: Response) => {
        const options = UtilsFunc.getQueryParams(req.params);
        const deletedCategory = await CategoryService.deleteCategory(options);

        res.status(200).send(deletedCategory);
    }

    getAll = async (req: Request, res: Response) => {
        const categories = await CategoryService.getAllCategories();

        res.status(200).send(categories);
    }
}

export const categoryController = new CategoryController();