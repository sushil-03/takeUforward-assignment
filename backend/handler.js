"use strict";
const app = require("./dist/index.js");
const serverless = require("serverless-http");
module.exports.hello = serverless(app);
