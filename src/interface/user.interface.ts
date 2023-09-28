import {Model} from "sequelize";

export interface IUser {
    userName: string;
    email: string;
    password: string;
}

export interface UserModel extends Model<IUser>, IUser {};
