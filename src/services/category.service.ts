import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";
import {where} from "sequelize";
import {BaseRepository} from "../repository/base.repository";

const categoryRepo = new BaseRepository(db.categories);
export class CategoryService {
    static async addCategory(category: any) {
        try {
            const newCategory = await db.categories.create(category);

            if (!newCategory) throw new Error('Category creation failed');

            return newCategory;
        } catch (e) {
            console.log(e);
        }
    }

    static async deleteCategory(id: number) {
        try {
            const option
            const category = await categoryRepo.delete(id);

            return 'deleted';
        } catch (e) {
            console.log(e);
        }
    }

    static async getAllCategories() {
        try {
            const categories = await categoryRepo.findAll();

            if (!categories) throw new Error('Categories not found');

            return categories;
        }
        catch (e) {
            console.log(e);
        }
    }
}