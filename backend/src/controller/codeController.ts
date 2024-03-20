import { Request, Response } from "express";
import Code from '../models/CodeModel'
import redisClient from "../utils/redis";
import { Op } from 'sequelize';


export const addCode = async (req: Request, res: Response): Promise<void> => {
  try {

    const data = req.body.data
    // TODO Add code to the database

    if (!data.username || !data.code || !data.language) {
      res.status(400).json({
        message: "Fill all the fields"
      })
      return;
    }

    redisClient.flushAll()
    await Code.create(data)
    res.status(200).json({
      message: "Success"
    })

  } catch (e) {
    res.status(400).json({
      message: "Something went wrong.."
    })
  }
};
export const getAllCode = async (req: Request, res: Response): Promise<void> => {
  const { order = '', username = '' } = req.query;
  let sortOrder: 'ASC' | 'DESC' = 'ASC';
  if (order === 'desc') {
    sortOrder = 'DESC';
  }
  let whereClause = {};

  if (username) {
    whereClause = {
      ...whereClause,
      username: {
        [Op.like]: `%${username}%`,
      },
    };
  }

  //TODO Fetch from Redis Cache
  const cachedValue = await redisClient.get(`Code:${username}:${order}`)

  if (cachedValue) {
    res.status(200).json({
      message: "Success",
      allCodes: JSON.parse(cachedValue),
    })
    return;
  }

  //TODO Find all value from database
  try {
    const allCodes = await Code.findAll({
      order: [['createdAt', sortOrder]],
      where: whereClause,
    })

    //TODO Cache Value for later use
    try {
      await redisClient.set(`Code:${username}:${order}`, JSON.stringify(allCodes))
    } catch (error) {
      res.status(400).json({
        message: "Error while adding data to redis"
      })
    }

    //TODO return the response
    res.status(200).json({
      message: "Success",
      allCodes: allCodes,
    })

  } catch (e) {
    res.status(400).json({
      message: "Something went wrong.."
    })
  }
}
