"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// dotenv.config( {
//     path: `${__dirname}/.env`
//   }
// )
dotenv_1.default.config({
// path: `${__dirname}/.env`
});
const codeRoute_1 = __importDefault(require("./routes/codeRoute"));
const CodeModel_1 = __importDefault(require("./models/CodeModel"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// dotenv.config({
//   path: `src/config/config.env`
// })
const PORT = 3001;
(_a = CodeModel_1.default.sequelize) === null || _a === void 0 ? void 0 : _a.sync().then(() => {
    app.use("/api/v1", codeRoute_1.default);
    app.use("/", (req, res) => {
        res.json({
            message: "Server is healthy..",
        });
    });
});
module.exports = app;
