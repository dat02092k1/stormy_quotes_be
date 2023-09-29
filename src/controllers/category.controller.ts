import {Request, Response} from "express";
import {CategoryService} from "../services/category.service";
import {UtilsFunc} from "../utils/utils";

class CategoryController {
    create = async (req: Request, res: Response) => {
        const category =  req.body.category;

        const newCategory = await CategoryService.addCategory(category);

        res.status(201).send(newCategory);
    }

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