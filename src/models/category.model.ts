import {Sequelize, DataTypes, ModelAttributes} from 'sequelize';
import {CategoryModel, ICategory} from "../interface/category.interface";

const categoryAttributes: ModelAttributes<CategoryModel, ICategory> = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

export default (sequelize: Sequelize, DataTypes: any) => {
    const Category = sequelize.define<CategoryModel, ICategory>('Category', categoryAttributes, {
        timestamps: true,
    });

    return Category;
};
