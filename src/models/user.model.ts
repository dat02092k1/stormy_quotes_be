import { Sequelize, DataTypes, ModelAttributes } from 'sequelize';
import {IUser, UserModel} from "../interface/user.interface";
import Quote from './quote.model'; // Import the Quote model

const userAttributes: ModelAttributes<UserModel, IUser> = {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true, // checks for email format
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

export default (sequelize: Sequelize, DataTypes: any) => {
    const User = sequelize.define<UserModel, IUser>('User', userAttributes, {
        timestamps: true,
    });

    return User;
};
