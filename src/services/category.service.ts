import {db} from "../config/init.postgresql";
import {UtilsFunc} from "../utils/utils";

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
            const category = await db.categories.findByPk(id);

            if (!category) throw new Error('Quote not found');

            category.destroy({
                where: {id: id}
            });

            return 'deleted';
        } catch (e) {
            console.log(e);
        }
    }

    static async getAllCategories() {
        try {
            const categories = await db.categories.findAll();

            if (!categories) throw new Error('Categories not found');

            return categories;
        }
        catch (e) {
            console.log(e);
        }
    }
}