import express from "express";

const router = express.Router();
import { addCode, getAllCode } from '../controller/codeController'



router.route("/code").post(addCode);
router.route("/code").get(getAllCode);

export default router;