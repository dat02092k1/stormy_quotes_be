import {Sequelize, DataTypes} from 'sequelize';
import userModel from '../models/user.model';
import quoteModel from '../models/quote.model';
import categoryModel from '../models/category.model';

import dotenv from 'dotenv';
dotenv.config();

// Database connection with dialect of postgres specifying the database we are using
// port for my database is 5433
// database name is discover
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;
const db_pw = process.env.DB_PW;

const sequelize = new Sequelize(`postgres://postgres:${db_pw}@localhost:${db_port}/${db_name}`, { dialect: "postgres" });

// checking if the connection is done
    sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`);
}).catch((err) => {
    console.log(err);
});

export const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// connecting to model
db.users = userModel(sequelize, DataTypes);
db.quotes = quoteModel(sequelize, DataTypes);
db.categories = categoryModel(sequelize, DataTypes);

db.categories.hasMany(db.quotes, { foreignKey: 'category_id' });
db.quotes.belongsTo(db.categories, { foreignKey: 'category_id' });