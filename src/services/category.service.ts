import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";
import {ModelCtor, where} from "sequelize";
import {BaseRepository} from "../repository/base.repository";
import { Api404Error } from "../response/error.response";

const categoryRepo = new BaseRepository(db.categories);
export class CategoryService {
    static async addCategory(category: any) {
        if (!category.name) {
            // Nếu trường name không được cung cấp, trả về lỗi 401
            throw new Api404Error('Category name is required');
        }

            const newCategory = await db.categories.create(category);
            console.log('newCategory::', newCategory);
            
            // if (!newCategory) throw new Api404Error('Category creation failed');

            return newCategory;
         
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