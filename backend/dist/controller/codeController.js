"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCode = exports.addCode = void 0;
const CodeModel_1 = __importDefault(require("../models/CodeModel"));
//Get all product
const sequelize_1 = require("sequelize");
const addCode = async (req, res) => {
    try {
        const data = req.body.data;
        console.log('dataaaaaaa', data);
        const response = await CodeModel_1.default.create(data);
        res.status(200).json({
            message: "Success"
        });
    }
    catch (e) {
        console.log('error', e);
        res.status(400).json({
            message: "Something went wrong.."
        });
    }
};
exports.addCode = addCode;
const getAllCode = async (req, res) => {
    const { order, username } = req.query;
    let sortOrder = 'ASC';
    if (order === 'desc') {
        sortOrder = 'DESC';
    }
    let whereClause = {};
    console.log('username', username);
    if (username) {
        whereClause = Object.assign(Object.assign({}, whereClause), { username: {
                [sequelize_1.Op.like]: `%${username}%`,
            } });
    }
    try {
        const allCodes = await CodeModel_1.default.findAll({
            order: [['createdAt', sortOrder]],
            where: whereClause,
        });
        res.status(200).json({
            message: "Success",
            allCodes,
        });
    }
    catch (e) {
        res.status(400).json({
            message: "Something went wrong.."
        });
    }
};
exports.getAllCode = getAllCode;
