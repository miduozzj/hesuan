"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerInfo = async (req, res, next) => {
    try {
        console.log('发送请求');
        next();
    }
    catch (err) {
        console.log('请求出错');
    }
};
exports.default = loggerInfo;
