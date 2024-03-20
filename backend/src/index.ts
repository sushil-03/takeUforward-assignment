

import express from "express";
import cors from "cors";
const app = express();
import bodyParser from "body-parser";
import dotenv from 'dotenv'

dotenv.config()

import code from "./routes/codeRoute";
import db from './models/CodeModel'

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


// dotenv.config({
//   path: `src/config/config.env`
// })



const PORT = 3001;

db.sequelize?.sync().then(() => {
  app.use("/api/v1", code);

  app.use("/", (req, res) => {
    res.json({
      message: "Server is healthy..",
    });
  });

})
app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});

