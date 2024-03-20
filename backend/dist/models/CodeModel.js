"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Initialize Sequelize 
// const sequelize = new Sequelize('code_app', 'avnadmin', 'AVNS_ovZSRuLFyl3P_S0vd7j', {
//   host: 'mysql-84d76a2-sushilrawat1720-ea0b.a.aivencloud.com',
//   dialect: 'mysql',
//   port: 25864
// });
const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER || "root";
const pass = process.env.MYSQL_PASS;
const database = process.env.MYSQL_DATABASE || "code-app";
const port = process.env.MYSQL_PORT || '0';
const sequelize = new sequelize_1.Sequelize(database, user, pass, {
    host: 'mysql-84d76a2-sushilrawat1720-ea0b.a.aivencloud.com',
    dialect: 'mysql',
    port: parseInt(port)
});
// const sequelize = new Sequelize('temp', 'root', '12345@Sushil', {
//   host: 'localhost',
//   dialect: 'mysql',
//    port: parseInt(port)
// });
// Define the Codes model
const Code = sequelize.define('codes', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    standard_input: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    code: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    language: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
});
(async () => {
    await sequelize.sync();
    console.log("Codes table created successfully!");
})();
exports.default = Code;
