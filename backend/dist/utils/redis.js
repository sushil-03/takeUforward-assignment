"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL
});
const connectRedis = async () => {
    await redisClient.connect();
    redisClient.on("error", function (err) {
        console.log('error', err);
        throw err;
    });
};
connectRedis();
exports.default = redisClient;
