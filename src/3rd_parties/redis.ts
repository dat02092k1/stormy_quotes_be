import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();
export const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT as string),
});

redisClient.on('connect', () => {
    console.log('Connected to Redis server');
});

redisClient.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

export function isRedisConnected() {
    console.log(redisClient.status);
    return redisClient.status === 'ready';
}

// (async () => {
//     redisClient.on('connect', () => {
//         console.log('Redis client connected');
//     });
//
//     redisClient.on('error', (err) => {
//         console.log('Something went wrong ' + err);
//     });
// })();