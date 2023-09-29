import {Model} from "sequelize";

export interface ICategory {
    name: string;
}

export interface CategoryModel extends Model<ICategory>, ICategory {};
