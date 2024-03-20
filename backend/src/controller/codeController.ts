// import Product from "../models/productModel";
// import ApiFeatures from "../utils/apiFeatures";
import { Request, Response } from "express";
import Code from '../models/CodeModel'
//Get all product
import { Op } from 'sequelize';


export const addCode = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body.data
    console.log('dataaaaaaa', data);

    const response = await Code.create(data)
    res.status(200).json({
      message: "Success"
    })
  } catch (e) {
    console.log('error', e);

    res.status(400).json({
      message: "Something went wrong.."
    })
  }
};
export const getAllCode = async (req: Request, res: Response): Promise<void> => {
  const { order, username } = req.query;
  let sortOrder: 'ASC' | 'DESC' = 'ASC';
  if (order === 'desc') {
    sortOrder = 'DESC';
  }
  let whereClause = {};
  console.log('username', username);

  if (username) {
    whereClause = {
      ...whereClause,
      username: {
        [Op.like]: `%${username}%`,
      },
    };
  }
  try {
    const allCodes = await Code.findAll({
      order: [['createdAt', sortOrder]],
      where: whereClause,

    })
    res.status(200).json({
      message: "Success",
      allCodes,
    })
  } catch (e) {
    res.status(400).json({
      message: "Something went wrong.."
    })
  }

}
