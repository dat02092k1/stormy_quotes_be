import express from 'express';
import {db} from "./config/init.postgresql";
import {router} from "./routes/routes";
// import {db} from '../config/db.config';
// import {router} from "../routes/route";

export const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/', router);

// db
//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})
// app.use('/', router);
