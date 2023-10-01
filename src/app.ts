import express from 'express';
import {db} from "./config/init.postgresql";
import {router} from "./routes/routes";
import {isRedisConnected} from "./3rd_parties/redis";
import { is404Handler, logErrorMiddleware, returnError } from './middlewares/errorHandler';
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
db.sequelize.sync({ force: false }).then(() => {
    console.log("db has been re sync")
})

// redis
if (isRedisConnected()) {
    console.log('Redis client is connected to the Redis server');
} else {
    console.log('Redis client is not connected to the Redis server');
}

// handle errors
app.use(is404Handler);
app.use(logErrorMiddleware);
app.use(returnError);

