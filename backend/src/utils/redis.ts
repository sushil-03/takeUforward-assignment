import { createClient } from "redis"

const redisClient = createClient({
  url: process.env.REDIS_URL
});
const connectRedis = async () => {
  await redisClient.connect();
  redisClient.on("error", function (err) {
    throw err;
  });
}
connectRedis();
export default redisClient