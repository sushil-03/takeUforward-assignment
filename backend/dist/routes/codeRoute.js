"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const codeController_1 = require("../controller/codeController");
router.route("/code").post(codeController_1.addCode);
router.route("/code").get(codeController_1.getAllCode);
exports.default = router;
