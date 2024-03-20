"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCode = exports.addCode = void 0;
const CodeModel_1 = __importDefault(require("../models/CodeModel"));
const redis_1 = __importDefault(require("../utils/redis"));
const sequelize_1 = require("sequelize");
const addCode = async (req, res) => {
    try {
        const data = req.body.data;
        // TODO Add code to the database
        if (!data.username || !data.code || !data.language) {
            res.status(400).json({
                message: "Fill all the fields"
            });
            return;
        }
        redis_1.default.flushAll();
        await CodeModel_1.default.create(data);
        res.status(200).json({
            message: "Success"
        });
    }
    catch (e) {
        res.status(400).json({
            message: "Something went wrong.."
        });
    }
};
exports.addCode = addCode;
const getAllCode = async (req, res) => {
    const { order = '', username = '' } = req.query;
    let sortOrder = 'ASC';
    if (order === 'desc') {
        sortOrder = 'DESC';
    }
    let whereClause = {};
    if (username) {
        whereClause = Object.assign(Object.assign({}, whereClause), { username: {
                [sequelize_1.Op.like]: `%${username}%`,
            } });
    }
    //TODO Fetch from Redis Cache
    const cachedValue = await redis_1.default.get(`Code:${username}:${order}`);
    if (cachedValue) {
        res.status(200).json({
            message: "Success",
            allCodes: JSON.parse(cachedValue),
        });
        return;
    }
    //TODO Find all value from database
    try {
        const allCodes = await CodeModel_1.default.findAll({
            order: [['createdAt', sortOrder]],
            where: whereClause,
        });
        //TODO Cache Value for later use
        try {
            await redis_1.default.set(`Code:${username}:${order}`, JSON.stringify(allCodes));
        }
        catch (error) {
            res.status(400).json({
                message: "Error while adding data to redis"
            });
        }
        //TODO return the response
        res.status(200).json({
            message: "Success",
            allCodes: allCodes,
        });
    }
    catch (e) {
        res.status(400).json({
            message: "Something went wrong.."
        });
    }
};
exports.getAllCode = getAllCode;
