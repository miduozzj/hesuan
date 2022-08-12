"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("./middlewares/log"));
const wjwApi_1 = __importDefault(require("./routes/wjwApi"));
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`server run ${PORT}!`);
});
app.use(log_1.default);
app.use(wjwApi_1.default);
console.log(process.env);
