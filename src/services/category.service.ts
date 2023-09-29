import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";
import {ModelCtor, where} from "sequelize";
import {BaseRepository} from "../repository/base.repository";

const categoryRepo = new BaseRepository(db.categories);
export class CategoryService {
    static async addCategory(category: any) {
        try {
            const newCategory = await categoryRepo.create(category);

            if (!newCategory) throw new Error('Category creation failed');

            return newCategory;
        } catch (e) {
            console.log(e);
        }
    }

    static async deleteCategory(options: any) {
        try {
            const category = await categoryRepo.delete(options);

            return 'deleted';
        } catch (e) {
            console.log(e);
        }
    }

    static async getAllCategories() {
        try {
            const categories = await categoryRepo.findWithCondition();

            if (!categories) throw new Error('Categories not found');

            return categories;
        }
        catch (e) {
            console.log(e);
        }
    }
}